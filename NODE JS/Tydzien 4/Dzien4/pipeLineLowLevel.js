const {createWriteStream,createReadStream} = require('fs');

const r = createReadStream('CODING.jpg');
const w = createWriteStream('CODING4jpg');

r.on('data', data=>w.write(data));
r.on('end', ()=> {
    w.close();
    console.log("READY!")
});