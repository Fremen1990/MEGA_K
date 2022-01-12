const {promisify} = require('util');
const scrypt = promisify(require('crypto').scrypt);
const randomBytes = promisify(require('crypto').randomBytes);
const {createCipheriv, createDecipheriv, createHmac} = require('crypto');

async function encryptText(text, password, salt) {
    //First, we'll generate the key. The key length is depended on the algoritm.
    //In this case for aes192, it is 24 bytes (192bits).
    const algorithm = 'aes-192-cbc';
    const key = await scrypt(password, salt, 24);
    const iv = await randomBytes(16); // initialization vector

    const cipher = createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex')
    return {
        encrypted,
        iv: iv.toString('hex'),
    };
}

async function decryptText(text, password, salt, ivHex) {
    //First, we'll generate the key. The key length is depended on the algoritm.
    //In this case for aes192, it is 24 bytes (192bits).
    const algorithm = 'aes-192-cbc';
    const key = await scrypt(password, salt, 24);
    const iv = Buffer.from(ivHex, 'hex') // initialization vector

    const decipher = createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(text, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

async function encryptBinary(binary, password, salt) {
    //First, we'll generate the key. The key length is depended on the algoritm.
    //In this case for aes192, it is 24 bytes (192bits).
    const algorithm = 'aes-192-cbc';
    const key = await scrypt(password, salt, 24);
    const iv = await randomBytes(16); // initialization vector

    const cipher = createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(binary, 'utf8', 'hex');
    encrypted += cipher.final('hex')
    return {
        encrypted,
        iv: iv.toString('hex'),
    };
}

async function decryptBinary(binary, password, salt, ivHex) {
    //First, we'll generate the key. The key length is depended on the algoritm.
    //In this case for aes192, it is 24 bytes (192bits).
    const algorithm = 'aes-192-cbc';
    const key = await scrypt(password, salt, 24);
    const iv = Buffer.from(ivHex, 'hex') // initialization vector

    const decipher = createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(binary, 'hex', 'binary');
    decrypted += decipher.final('binary');
    return decrypted;
}

function hash(text,salt){
    return createHmac('sha512', salt)
        .update(text)
        .digest('hex')
}


module.exports = {
    encryptText,
    decryptText,
    hash,
    encryptBinary,
    decryptBinary,
};