const {generateKeyPairSync} = require('crypto');

const {privateKey, publicKey} = generateKeyPairSync('rsa',{
    // Length of key in bits
    modulusLength: 2048,  
    publicKeyEncoding:{
        // Reccommended by Node.js docs
        type: 'spki',
        format: 'pem', 
    },
    privateKeyEncoding:{
        // Recommended by Node.js
        type:'pkcs8',
        format: 'pem',
    },
});

console.log(publicKey);
console.log(privateKey);

module.exports ={
    privateKey, publicKey
}