const {writeFile, readFile, appendFile} = require('fs').promises;

// writeFile("./data/numbers.txt", "100", "utf-8", error => {
//     if(!error){
//         console.log("File saved!! ")
//     }
//      else if(error){
//          console.log("ERRORR!!!", error);
//     }
// })

// const FILE_NAME = './data/numbers.txt';
//
// (async ()=>{
//     try{
//         const numberFromFile =  Number(await readFile(FILE_NAME, 'utf-8'));
//         console.log(typeof(numberFromFile), numberFromFile)
//         await writeFile(FILE_NAME, (numberFromFile * 2).toString(), 'utf8');
//         await console.log(typeof(numberFromFile), numberFromFile)
//     }
//     catch(error){
//         console.log("BLAAAAD", error);
//     }
//
// })();

//--------------------------------------------------------

// writeFile("./data/numbers2.txt", "100", "utf-8", error => {
//     if(!error){
//         console.log("File saved!! ")
//     }
//      else if(error){
//          console.log("ERRORR!!!", error);
//     }
// })

// const FILE_NAME = './data/numbers2.txt';
// //
// (async ()=>{
//     try{
//         const numberFromFile =  Number(await readFile(FILE_NAME, 'utf-8'));
//         // console.log(typeof(numberFromFile), numberFromFile)
//         await appendFile(FILE_NAME, `\n(${(numberFromFile * 2).toString()}`, 'utf8');
//         await console.log(typeof(numberFromFile), numberFromFile)
//     }
//     catch(error){
//         console.log("BLAAAAD", error);
//     }
//
// })();

//--------------------------------------------------------

// writeFile("./data/numbers3.txt", "100", "utf-8", error => {
//     if(!error){
//         console.log("File saved!! ")
//     }
//      else if(error){
//          console.log("ERRORR!!!", error);
//     }
// })

const FILE_NAME = './data/numbers3.txt';
//

readFile(FILE_NAME, 'utf8', (error, data)=>{
    if(error){
        console.log("OH NOWW", error);
    }else{
        const numberFromFile = Number(data);
        appendFile(FILE_NAME, `\n${(numberFromFile *2).toString()}`, 'utf8', error=>{
            if(error){
                console.log("OH NOWW", error);
            }else{
                console.log("FILE IS SAVED")
            }
        })
    }
})
