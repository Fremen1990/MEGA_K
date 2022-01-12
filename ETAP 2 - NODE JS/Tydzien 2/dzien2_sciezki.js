// const {basename} = require('path');
const colors = require('colors');

console.log("lokacja: " .green,__dirname);
console.log("plik: " .yellow ,__filename);

// funkcja basename obcina lokacje i zostawia sam file name
// console.log("plik basename: " .red, basename(__filename));


const {join, dirname} =require('path');

const fullPath = join(__dirname, process.argv[2]);

console.log(fullPath);