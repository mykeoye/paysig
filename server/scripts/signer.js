/**
 * Provides a means to sign an intent with the client's provided private key
 */
require('../../patch');
const { secp256k1 } = require('ethereum-cryptography/secp256k1');
const { keccak256 } =  require('ethereum-cryptography/keccak');
const { toHex, utf8ToBytes } = require('ethereum-cryptography/utils');

const privateKey = '1cc569ca3918d9f6e20192cbfe604af78f1291071f813495f584ac530241a564';
const message = 'Wallet 1 signed this message';

const hash = toHex(keccak256(utf8ToBytes(message)));
const signature = secp256k1.sign(hash, privateKey);

console.log(`Signature: ${JSON.stringify(signature)}`)

console.log(`Signature is ${hash}|${toHex(utf8ToBytes(JSON.stringify(signature)))}`);


