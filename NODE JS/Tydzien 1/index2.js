// const {readFile} = require('fs').promises;
//
// (async ()=>{
//     const data = await readFile('./index2.js', {
//         encoding:'utf-8',
//     })
// })();


// const {writeFile} = require('fs')
//
// writeFile('./Hello!!.txt', "Helllo worl!!", "utf-8", error=>{
//
//     if(!error){
//         console.log("file is saved :)")
//     } else if(error){
//         console.log("ERROR")
//     }
// })

const {writeFile} = require('fs').promises;

(async ()=>{
    try{
        await writeFile('./Hello!!.txt', "majdomain@me.com\n", {
            flag: 'a',
        });
        console.log('File SAVED!!  ')
    } catch(error){
        console.log("ooool nooo", error)
}
})();