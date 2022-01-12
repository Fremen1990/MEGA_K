// const {readFile} = require('fs');
// const {promisify} = require('util');
const {readFile} = require('fs').promises;

// const readFilePromised = promisify(readFile)

(async () =>{
try{
    const data = await readFile('./cipher.js', 'utf-8');
    console.log(data);
}
catch(err){
     console.log("OHO OH OH ERROR", err)
}
})();


// readFilePromised('./cipher.js', 'utf-8')
//     .then(data=>{
//         console.log(data)
//     })
//     .catch(err =>{
//         console.log("OH NOOO ERROR",err)
//     })
//
// console.log("Hello World!!!! :)")

// readFile('./inrsfrsdex.js', 'utf-8', (err, data)=>{
//     if(err===null){
//         console.log(data)
//     }else if(err){
//         console.log(("EEERROR", err))
//     }
// });

console.log("PROGRAM HAS FINISHEDD!")