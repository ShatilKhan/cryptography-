const { publicEncrypt, privateDecrypt } = require('crypto');

const {publicKey, privateKey} = require('./keypair');

const message = 'heev ho'

const encryptedData = publicEncrypt(
    publicKey,
    Buffer.from(message)
);

console.log(`Encrypted: ${encryptedData.toString('hex')}`)

const decryptedData = privateDecrypt(
    privateKey,
    encryptedData
);

console.log(`Decrypted:${decryptedData.toString('utf8')}`)