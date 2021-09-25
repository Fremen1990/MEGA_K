const {readdir, readFile, stat, access} = require('fs').promises;

const {W_OK} =  require('fs').constants;

/*
async function readFilesAndDirectories(){

    const fileNames =  await readdir('./data/',{
        withFileTypes:true,
    });
    console.log(fileNames)
  /*
    for(const fileName of fileNames){
    console.log(fileName)
    // const fileContent = await readFile(`./data/${fileName}`, 'utf8')
    // console.log(fileContent)

        // const fileStat = await stat(`./data/${fileName}`)
        // console.log(fileStat.isFile())
    }

}
readFilesAndDirectories();

*/

const FILE_NAME = './data/numbers.txt';

(async ()=>{
    try{
       const result =  await readFile(FILE_NAME, 'utf8');
       console.log("File exist, content: ", result)
    }
    catch(error){
        console.log("File does not exist, error code: ", error.code);

}
})();