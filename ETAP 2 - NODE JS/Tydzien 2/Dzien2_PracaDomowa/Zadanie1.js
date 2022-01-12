/*
@TODO - Zadanie 1
Stwórz program - przyjmując parametr który na podstawie
parametru wyświetli wszelkie informacje:

- pełną ściękę
- katalog nadrzędny
- nazwę pliku
- rozszerzenie pliku

np dla lokacji:
 - to/jest/plik.txt
 - /to/jest
 - plik.txt
 - .txt
A dla text.bmp coś w stylu:

 - C:\User\MegaKurs\Desktop\Projekty\test.bmp
- C:\User\MegaKurs\Desktop\Projekty\
- test.bmp
- .bmp

 */

const {basename, dirname, extname, normalize, join, resolve} = require('path');
const colors = require('colors');
const chalk = require('chalk');

function safeJoin(base, target){
    const targetPath = '.' + normalize('/' + target)
    return resolve(base, targetPath)
}

const userPath = safeJoin(__dirname, process.argv[2]);

console.log(userPath);

console.log("DIRNAME: ", userPath .green);
console.log("LOCATION: ", dirname(userPath .yellow));
console.log("BASENAME: ", basename(userPath .blue));
console.log("EXTENSION: ", extname(userPath .red));

const log = console.log;

log(chalk.bgYellow("\n--------------------------------\n"));

log(chalk.blue("some blue comment"));
log(chalk.red("some red comment"));
log(chalk.yellow("some yellow comment"));
log(chalk.green("some green comment"));
log(chalk.magenta("some magenta comment"));
log(chalk.cyan("some cyan comment"));
log(chalk.bgYellow("\n--------------------------------\n"));
log(chalk.bgBlue("some background blue comment"));
log(chalk.bgRed("some background red comment"));
log(chalk.bgYellow("some background yellow comment"));
log(chalk.bgGreen("some background green comment"));
log(chalk.bgMagenta("some background magenta comment"));
log(chalk.bgCyan("some background cyan comment"));
