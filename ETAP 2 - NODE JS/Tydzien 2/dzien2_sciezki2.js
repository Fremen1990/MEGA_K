const {basename, dirname, extname} = require('path');

console.log('dirname', dirname(__dirname));
console.log('basename', basename(__dirname));
console.log('exname', extname(__dirname));

const userPath = process.argv[2];
console.log(process.argv[2])

console.log('dirname userPth: ', dirname(userPath));
console.log('basename userPth: ', basename(userPath));

/**
 *
 *  __filename = G:\PROGRAMMING\MEGA K\NODE JS\Tydzien 2\dzien2_sciezki2.js
 *  __dirname = G:\PROGRAMMING\MEGA K\NODE JS\Tydzien 2\
 *    dirname(__dirname) =
 *
 *
 */

const {normalize, join, resolve} = require('path');

function safeJoin(base, target){
    const targetPath = '.' + normalize('/' + target)
    return resolve(base, targetPath);
}
const userPath = safeJoin(__dirname, process.argv[2]);

console.log(userPath);