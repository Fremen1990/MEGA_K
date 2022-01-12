const {promisify} = require('util');
const exec = promisify(require('child_process').exec);

// exec('dir')
//     .then(({stdout, stderr}) => {
//         console.log(stdout);
//     })

(async () => {
    try {
        const ip = process.argv[2].replace(/[^0-9.]+/g, "");

        const {stdout} = await exec(`ping ${ip}`, {
            env: {
                NODE_ENV: 'development',
            }
        });
        console.log(stdout);
    } catch (err) {
        console.log(err)
    }
})();