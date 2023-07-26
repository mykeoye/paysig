
const { toHex, hexToBytes, bytesToUtf8, utf8ToBytes } = require('ethereum-cryptography/utils');
const { secp256k1 } = require('ethereum-cryptography/secp256k1');
const { keccak256 } =  require('ethereum-cryptography/keccak');

const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;

app.use(cors());
app.use(express.json());

const balances = {
  "97cf0fb1d174bdac3cd43d0f5843071d3ff91575": 100,
  "578d1e7d587d7d15e65f5b3c840779045205327f": 50,
  "cb51b4d1831f9bfa65808306a477b29c2daca625": 75,
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  const { signature, recipient, amount } = req.body;

  // get the wallet address from the parsed signature
  let sender = ''
  try {
    const parsed = parseSignature(signature);
    sender = getWalletAddress(parsed);
  } catch(error) {
    res.status(400).send({ message: "Bad signature"});
    return;
  }

  if (isEmpty(sender)) {
    res.status(400).send({ message: "Bad signature"});
    return;
  }

  if (sender === recipient) {
    res.status(400).send({ message: "Can't send your own money to yourself"});
    return;
  }

  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}

function parseSignature(signature) {
  if (isEmpty(signature)) {
    return [];
  }
  const tokens = signature.split('|')
  return [tokens[0], JSON.parse(bytesToUtf8(hexToBytes(tokens[1])))];
}

function getWalletAddress(parsed) {
  if (parsed.length !== 2) {
    return '';
  }
  const rsv = parsed[1];
  let signature = new secp256k1.Signature(BigInt(rsv.r), BigInt(rsv.s), rsv.recovery);
  const publicKey = signature.recoverPublicKey(parsed[0]);
  return toHex(keccak256(publicKey.toRawBytes()).slice(-20));
}

function isEmpty(str) {
  return (!str || str.length === 0 );
}