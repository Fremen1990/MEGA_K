const {exec} = require('child_process');

const cp = exec('npm init -y', {
        // env:{
        //     PATH: '',
        // },
    // cwd: '',
    timeout: 1000 * 60,
    });



cp.stdout.on('data', data =>{
    console.log('Out > ',data)
})

cp.stderr.on('data', data=>{
    console.log("Error")
})

cp.on('close', ()=>{
    console.log('Finished')
})

setTimeout(()=>{
    cp.kill('SIGKILL');
}, 1000*60);