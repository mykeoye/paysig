/**
 * This simple script is used to generate a public/private key pair where the public
 * key serves as the basis for our wallet address. A user will normally have this stored
 * in the wallet app (hardware/software). The private key is never exposed and is only
 * used to sign messages when needed.
 */
const { secp256k1 } = require('ethereum-cryptography/secp256k1');
const { toHex } = require('ethereum-cryptography/utils');
const { keccak256 } =  require('ethereum-cryptography/keccak');

// Generate a public/private key pair
const { utils } = secp256k1;
for (let i = 0; i < 3; i++) {
    let privateKey = utils.randomPrivateKey();
    let publicKey = secp256k1.getPublicKey(privateKey);

    let index = i + 1;
    console.log(`Public key ${index}: ${toHex(publicKey)}`);
    console.log(`Private key ${index}: ${toHex(privateKey)}`);

    // the wallet address is derived from the public key as the last 20 bytes of the key
    const walletAddress = keccak256(publicKey).slice(-20);
    console.log(`Wallet address ${index}: ${toHex(walletAddress)} \n`);
}