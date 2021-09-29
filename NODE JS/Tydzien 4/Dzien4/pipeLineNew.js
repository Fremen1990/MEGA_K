const {createReadStream, createWriteStream} = require('fs');
const {pipeline} = require('stream').promises;
const {createGzip, createGunzip} = require('zlib');
// stream.promises.pipeline()

(async () => {

    const readStreamFile = createReadStream('CODING.jpg');
    const writeStreamFile = createWriteStream('CODING11.jpg');

    await pipeline(
        readStreamFile,
        createGzip(),
        // createGunzip(), dekompresja
        writeStreamFile,
    );
    console.log("PIPELINE DONE")

})();

