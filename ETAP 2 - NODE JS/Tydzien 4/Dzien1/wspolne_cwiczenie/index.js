const {hash, compare} = require('bcrypt');
const chalk = require('chalk');

    const userPassword ='megakurs';

    hash(process.argv[2], 10, (error, hash)=>{
        if(error){
            console.log("Error with hashing... ")
        }else{
            compare(userPassword,hash,(error, res)=>{
                if(res){
                    console.log(chalk.bgWhite.bold.green('LOGGED IN!'));
                } else{
                    console.log(chalk.bgYellow.bold.red('WRONG PASSWORD'));
                }
            })
        }
    })
