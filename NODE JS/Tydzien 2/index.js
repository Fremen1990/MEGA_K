const {mkdir, rename} = require('fs').promises;
const colort = require('colors');

// mkdir('./megaK', error=>{
//     console.log("error: ", error)
// });

// -------------------------------------
// IIFE - Immediately Invoke Function Expression
// (async() =>{
//     await mkdir('./data/data2/megaK',{
//         recursive: true,
//     });
// })();

//----------------------------------------------
// RENAME / MOVE FILE

// (async()=>{
//
//     try{
//         await rename('./data/data2/megaK/xyz-renamed.txt', './data/xyz-renamed-and-moved.txt');
//     } catch (e){
//         if(e.code === 'ENOENT'){
//             console.log("File does not exist")
//         }
//     }
// })();

console.log(global.process.argv);

const a = Number(process.argv[2]);
const b = Number(process.argv[4]);

const sign = process.argv[3];

if(sign === "*"){
    console.log("Wynik mnozenia to: ".yellow, a*b );
} else if(sign ==="+"){
    console.log("Wynik dodawania to: ".green, a+b);
}

(async ()=>{
 try{
     await function XXX(){}
 }
    catch(error){
     console.log(error)
    }
})();