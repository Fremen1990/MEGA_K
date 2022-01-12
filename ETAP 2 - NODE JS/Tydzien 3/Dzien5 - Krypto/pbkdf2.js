const {pbkdf2} = require('crypto');

const password = "Hello World from Thomas!! :)"
const salt = "RUIVSBR VR5UI54N3I 3 uii h738 3rf57835b vbfsfivb573b38rfb srvb 53793f 49377375gber9v57b3" +
    " 957bwrwvs3578b587 3br9vefbjv 5b793b59gf3b 9rvb93 ";
const iterationsNumber=100000;
const keyLength = 64;
const digest = 'sha512';

pbkdf2(password, salt, iterationsNumber, keyLength, digest,(error, derivedKey)=>{
    if(error) throw error;
    console.log(derivedKey.toString('hex'))
})