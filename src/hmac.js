const {createHmac} = require('crypto');

const key = 'secret';
const message = 'yo';

const hmac = createHmac('sha256',key).update(message).digest('hex');

console.log(hmac);

const key2 = 'otherpass';

const hmac2 = createHmac('sha256',key2).update(message).digest('hex');

console.log(hmac2)
