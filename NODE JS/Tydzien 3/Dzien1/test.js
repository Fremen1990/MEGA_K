const {exec} = require('child_process');

exec('dir', (error, stdout, stderr)=>{
    if(error){
        console.error( "oh nooo Error!");
    }else if(stderr){
        console.log("STD ERROR")
    }else {
        console.log("Hello World!");

    }
})