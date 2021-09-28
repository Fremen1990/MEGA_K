const {createReadStream, createWriteStream} = require('fs');
const {pipeline} = require('stream').promises;

// stream.promises.pipeline()

(async () => {

    const readStreamFile = createReadStream('CODING.jpg');
    const writeStreamFile = createWriteStream('CODING2.jpg');

    await pipeline(
        readStreamFile,
        writeStreamFile,
    );
    console.log("PIPELINE DONE")

})();

