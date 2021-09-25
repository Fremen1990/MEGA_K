/*
1. Przetwarzanie danych

Zapisz do pliku w swoim programie o ścieżce './data/input1.json'
taką treść:

[1, 2, 7, 20, 56, 22]

Napisz program, w którym otworzysz ten plik.

Jest to tablica liczb w formacie JSON.

Następnie zsumuj wszystkie liczby, a wynik zapisz tekstem do pliku "./data/sum.txt"

Pamiętaj, że funkcje odczytu i zapisu są asynchroniczne. Twój kod powinien odpowiadać takiemu pseudokodowi:

1 odczyt pliku
2 kiedy skoczy:
    zmiana jsona na tablice
    wykonujemy sumy (reduce!)
    zapisujemy  plik
        3 kiedy sie skonczy:
            informacja o powodzeniu lub błędzie i wyniku dodawania
 */


const {writeFile, readFile} = require('fs').promises;

const colors = require('colors');

let userNumbers = [];

(async () => {

    try {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        await readline.question("Type first of six numbers which you want not sum: ", inputNumber => {
            userNumbers = userNumbers.push(JSON.stringify(inputNumber))

            readline.question("Type second of six numbers which you want not sum: ", inputNumber2 => {
                userNumbers = userNumbers.push(JSON.stringify(inputNumber2))

                readline.question("Type third of six numbers which you want not sum: ", inputNumber3 => {
                    userNumbers = userNumbers.push(JSON.stringify(inputNumber3))

                    readline.question("Type fourth of six numbers which you want not sum: ", inputNumber4 => {
                        userNumbers = userNumbers.push(JSON.stringify(inputNumber4))

                        readline.question("Type fifth of six numbers which you want not sum: ", inputNumber5 => {
                            userNumbers = userNumbers.push(JSON.stringify(inputNumber5))

                            readline.question("Type sixth of six numbers which you want not sum: ", inputNumber6 => {
                                userNumbers = userNumbers.push(JSON.stringify(inputNumber6));
                            })
                        })
                    })


                })


            })


            console.log("Your numbers are: ", userNumbers, "type of: ", typeof (userNumbers));
        })

    } catch {
        console.log("some error", error)
    }
})();
//
// const FILE_NAME = './data/input1.json';
// const SAVE_FILE_NAME = './data/sum.txt';
//
//
// (async ()=>{
//
//     try{
//         const sumResult = await readFile(FILE_NAME, 'utf8');
//         // console.log(`Tablica JSON, type: ${typeof(sumResult)}, content: ${sumResult}`);
//         const tableToSum = JSON.parse(sumResult)
//         // console.log(tableToSum)
//
//         const sumOfTheArray= (tableToSum.reduce(function(a,b){
//             return a+b;
//         })).toString();
//
//         writeFile(SAVE_FILE_NAME, sumOfTheArray, 'utf8');
//
//         console.log('Sum is: '.green, sumOfTheArray .green)
//
//
//     } catch{
// console.log("Errror", error)
//     }
// })();
//






