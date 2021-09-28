const {readFile, writeFile} = require('fs').promises;
const {decryptText, hash} = require('../../../Tydzien 3/Dzien3/cipher');
const {SALT, sha512SALT} = require('./constants');

const [, , fileName, pwd] = process.argv;

(async () => {

    const content = await readFile(fileName, 'utf8');
    const contentParse =  JSON.parse(content);
    // console.log(contentParse)
    const decrypted = await decryptText(contentParse.encrypted, pwd, SALT, contentParse.iv)
    // console.log(decrypted)

    const decryptHash = hash(decrypted, sha512SALT);

    // console.log("json hash code:  ",contentParse.hashCode)

    if(decryptHash === contentParse.hashCode){
        await writeFile(fileName, decrypted, {
            encoding: "utf8",
        })
        console.log("DONE")

    } else {
        console.error("The file is not oryginal!!")
    }

})();