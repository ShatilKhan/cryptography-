const {createSign, createVerify} = require('crypto');
const {publicKey, privateKey} = require('./keypair');

const message = 'Bob';

// signn

const signer = createSign('rsa-sha256');

signer.update(message);

const signature = signer.sign(privateKey, 'hex');

console.log(`signature: ${signature}`)

// Verify

const verifier = createVerify('rsa-sha256');

verifier.update(message);

const isVerified = verifier.verify(publicKey, signature, 'hex');

console.log(`Verified:${isVerified}`)