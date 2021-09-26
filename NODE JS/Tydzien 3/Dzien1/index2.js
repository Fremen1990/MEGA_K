const {exec}=require('child_process');

exec('dir', (error, stdout, stderr)=>{
    if(error){
        console.error("Oh no ERRROR", error);
    } else if(stderr){
        console.error("Error in APP!!!", stderr);
    }else{
        console.log("Program has finished", stdout);
    }
})