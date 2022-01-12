const {unlink, rm} = require('fs').promises;

//    unlink ---
(async ()=>{
    const fileToDelete = process.argv[2];
    try{
        await unlink(fileToDelete);

    }catch(e){
        if(e.code === 'ENOENT'){
            console.log(`${fileToDelete} is not exist`)
        }else {
            console.log("another error occurred")
        }
    }
})();

//    rm ---
(async ()=>{
    const fileToDelete = process.argv[2];
    try{
        await rm(fileToDelete,{
            protected:true,
        });

    }catch(e){
        if(e.code === 'ENOENT'){
            console.log(`${fileToDelete} is not exist`)
        }else {
            console.log("another error occurred")
        }
    }
})();

