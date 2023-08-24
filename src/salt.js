const { scryptSync, randomBytes, timingSafeEqual} = require('crypto');

function signup(email, pass){
    const salt = randomBytes(16).toString('hex');
    const hashed = scryptSync(pass, salt, 64).toString('hex');

    const user = {email, pass: `${salt}:${hashed}`}

    users.push(user);

    return user
}

function login(email,pass){
    const user = users.find(v => v.email ===email);
    
    const [salt,key] = user.pass.split(':');
    const hashedBuffer = scryptSync(pass, salt, 64);

    const keyBuffer = Buffer.from(key, 'hex');
    const match = timingSafeEqual(hashedBuffer, keyBuffer);

    if(match){
        return 'logged In!'
    }else{
        return 'Nope!'
    }
}

const users =[];

const user = signup('hue@ha.com', 'pASS');

console.log(user)

const result = login('hue@ha.com', 'pASS')

console.log(result)