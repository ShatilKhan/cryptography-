const {createCipheriv, randomBytes, createDecipheriv} = require('crypto');

// Cipher

const message = 'Bob';
const key = randomBytes(32);
const iv = randomBytes(16);

// AES- encryption algorith, different from hashing algorithm
const cipher = createCipheriv('aes256', key, iv);

// Encrypt
// Turn utf8 text to hex cipher

const encryptedMessage = cipher.update(message, 'utf8', 'hex')+ cipher.final('hex');

console.log(`Encrypted: ${encryptedMessage}`);  



// Decipher

const decipher = createDecipheriv('aes256', key, iv);

// Decrypt
// Turn Cipher back into utf8 text message
const decryptMessage = decipher.update(encryptedMessage, 'hex', 'utf-8' )+ decipher.final('utf8');
console.log(`Decrypted: ${decryptMessage.toString('utf-8')}`);