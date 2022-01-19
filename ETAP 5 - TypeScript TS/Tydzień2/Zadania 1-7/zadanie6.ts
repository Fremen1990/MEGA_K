// Optypuj poniższy kod, następie napisz pętlę, która będzie wypisywała wartość po kolei wszystkich elementów pojedynczo w konsoli.
// Spróbuj użyć różnych typów pętli. //forEach, for...i, for...in, for...of
// Zwróć uwagę na to jak edytor sprawnie podpowiada Ci w pracy.
// W kodzie jest błąd - powinno to być widać i łatwo możesz go naprawić.

interface OneItem {
    name: string;
    count: number;
    pricePerOne: number;
    vat: number;
}

function showItemsForEach(items: OneItem[]) {
    console.log('----------------------- FOR EACH --------------------------\n')
    items.forEach(item => {
            console.log(item);
        }
    )
    console.log('------------------- END OF THE PARTY :) ----------------\n')
}

function showItemsForI(items: OneItem[]) {
    console.log('------------------------- FOR i ------------------------------\n')
    for (let i = 0; i < items.length; i++) {
        console.log(items[i]);
    }
    console.log('------------------- END OF THE PARTY :) ----------------\n')
}

function showItemsForIn(items: OneItem[]) {
    console.log('----------------------- FOR IN --------------------------\n')
    for (const item in items) {
        console.log(items[item]);
    }
    console.log('------------------- END OF THE PARTY :) ----------------\n')
}

function showItemsForOf(items: OneItem[]) {
    console.log('----------------------- FOR OF --------------------------\n')
    for (const item of items) {
        console.log(item);
    }
    console.log('------------------- END OF THE PARTY :) ----------------\n')
}

showItemsForEach(items);
showItemsForI(items);
showItemsForIn(items);
showItemsForOf(items);


const items: OneItem[] = [
    {
        name: 'Pomarańcze luz',
        count: 1.2,
        pricePerOne: 1,
        vat: 0,
    },
    {
        name: 'Opony komplet',
        count: 1,
        pricePerOne: 800,
        vat: 23,
    },
    {
        name: 'MP3 Player Manta 256MB',
        count: 1,
        pricePerOne: 75,
        vat: 23,
    },
    {
        name: 'Baton "Mega Kursowy"',
        count: 5,
        pricePerOne: 2,
        vat: 23,
    },
];


