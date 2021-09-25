const {readFile} =require('fs');
const {resolve, normalize, dirname} = require('path');
const {watch}=require('chokidar');


function safeJoin(base, target){
    const targetPath = '.' + normalize('/' + target)
    return resolve(base, targetPath)
}

const userPath = (safeJoin(__dirname, process.argv[1]))
const userLocation = dirname(userPath)

const log = console.log;
log(userLocation);

watch('./**/*.js',{
    ignoreInitial:true,
})
    .on("add", path => log(`File ${path} has been added!!!`))
    .on("change", path => readFile(path, "utf-8",(error,data)=>{
        if(error){
            log(error);
        }else {console.log(data)}
    } ))
    .on("unlink", path => log(`File ${path} file has been deleted}`));

//sdgnfsvnb//