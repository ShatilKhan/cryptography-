const { createHash } = require('crypto');

// Create a string hash

function hash(input){
    return createHash('sha256').update(input).digest('base64');
}

// Hash a Password
let pass = 'yoyo';
const hash1 = hash(pass);
console.log(hash1)


// Compare Hash

 pass = 'yoyo';
const hash2 = hash(pass);
const match = hash1 === hash2;

console.log(match? 'Password Match!': 'Password Does not Match!');

