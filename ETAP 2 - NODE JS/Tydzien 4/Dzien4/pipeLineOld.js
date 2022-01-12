const {createWriteStream,createReadStream} = require('fs');

const r = createReadStream('CODING.jpg');
const w = createWriteStream('CODING3.jpg');

r.pipe(w);
r.on('end', ()=> console.log("READY!"));