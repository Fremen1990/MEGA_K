const {encryptText, decryptText} = require('./cipher');

const SALT = 'zXFbg34433vrsUVUYg&(*(b97B(&(&IBUb97B&(B(b';

    (async ()=>{

        const encrypted = await encryptText('Zażółć gęślą jaźń', 'A oto i tajne haslo', SALT);
        console.log(encrypted);

        const decrypted = await decryptText(encrypted.encrypted,'A oto i tajne haslo', SALT, encrypted.iv);
        console.log(decrypted);

    })();