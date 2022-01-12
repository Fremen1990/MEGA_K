const {createWriteStream, createReadStream} = require('fs');
const {pipeline} = require('stream').promises;
const {createCipheriv} = require('cipher');
const {promisify} = require('util');
const scrypt = promisify(require('crypto').scrypt);
const {SALT} = require('../../Dzien1/Projekt/constants');

(async () => {
    const algorithm = 'aes-192-cbc';

    const [, , inputFile, outputFile, pwd] = process.argv;
    const key = await scrypt(pwd, SALT, 24);

    await pipeline(
        createReadStream(inputFile),
        createCipheriv(algorithm, key),
        createWriteStream(outputFile),
    )
    console.log("PIPELINE DONE")
})();