    const {hash, compare} = require('bcrypt');

    const textToBeChecked = 'Hello World from Thomas!!';

hash('Hello World from Thomas!!', 10, (error, hash)=>{
    if(error) {
        console.log(error);
    }
    else {
        console.log(hash);

        compare(textToBeChecked, hash, (error,res)=>{
            if(res){
                console.log("Password Math!!")
            }else{
                console.log("Password dont match!")
            }
        })
    }
});



