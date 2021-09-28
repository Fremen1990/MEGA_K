const {readFile, writeFile} = require('fs').promises;
const {encryptText, hash} = require('../../../Tydzien 3/Dzien3/cipher')
const [, , fileName, pwd] = process.argv;
const {SALT} = require('./constants');
const {sha512SALT} = require('./constants');

(async () => {

    const content = await readFile(fileName, 'utf8');
    const hashedText =  hash(content, sha512SALT);
    // console.log(hashedText);
    const encrypted = await encryptText(content, pwd, SALT)
    encrypted.hashCode = hashedText;
    // console.log(encrypted)
    const finalData = await JSON.stringify(encrypted);
    // console.log(finalData)
    //
    await writeFile(fileName, finalData, {
        encoding: "utf8",
    })
    console.log("DONE")
})();



