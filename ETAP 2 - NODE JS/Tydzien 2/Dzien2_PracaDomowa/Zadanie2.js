/*
@TODO - Zadanie 2
Przyjmuj w argumencie do kolejnego programu nazwę pliku. Zadbaj o to,
aby musiał to być plik znajdujący się w katalogu programu, nie poza nim.

 Sprawdź czy Twój program jest odporny na nasatępujące sztuczki:

 - ../../../../../../Windows/System32/Drivers/etc/host
 - ~/Me.jpg
 - C:\systeminfo
 - LPT1 - co sie dzieje w tym przypadku??  Jest ok?  spróbuj zapisać taki plik
 */

const {normalize, resolve}=require('path');

function safeJoin(base, target){
    const targetPath = '.' + normalize('/' + target)
    return resolve(base, targetPath);
}

const userPath=safeJoin(__dirname, process.argv[2]);

console.log(userPath);

