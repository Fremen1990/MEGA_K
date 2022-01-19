// type TwoNumbersSign = '+' | '-' | '*' | '/';

enum TwoNumbersSign {
    Plus,
    Minus,
    Multiply,
    Divide,
}

interface TwoNumbersOperation {
    a: number | string;
    b: number | string;
    sign?: TwoNumbersSign;
}

// type OneNumberSign = '++' | '--';

enum OneNumberSign{
    Inc,
    Dec,
}

interface OneNumberOperation {
    a: number | string;
    sign?: OneNumberSign;
}

type CorrectType = OneNumberOperation | TwoNumbersOperation;

// Nie modyfikuj w ogóle kodu poniżej - stwórz interfejs tak, aby pasował wszędzie

const a: CorrectType = {
    a: 1,
    b: 2,
    sign: TwoNumbersSign.Plus,
};

const b: CorrectType = {
    a: 1,
    b: 2,
};

const c: CorrectType = {
    a: '1',
    b: '2',
    sign: TwoNumbersSign.Minus,
};

const d: CorrectType = {
    a: 1,
    sign: OneNumberSign.Inc,
};

const e: CorrectType = {
    a: 33,
    sign: OneNumberSign.Dec,
}

// Zmiana: zmień teraz typ tak, aby znak mógł być tylko +, -, * lub /

// Zmiana: stwórz dokładne typy tak, by w przypadku posiadania tylko 1 danej (a) można było na niej wykonać ++ i --, ale nie w przypadku dwóch i na odwrót

// Zmień program w taki sposób, aby do operacji używało się enumów, a nie stringów

function calc({a,b,sign} : TwoNumbersOperation) : void{
        switch(sign){
            case TwoNumbersSign.Plus:
                console.log(Number(a)+Number(b));
                break;
            case TwoNumbersSign.Minus:
                console.log(Number(a)-Number(b));
                break;
            case TwoNumbersSign.Multiply:
                console.log(Number(a)*Number(b));
                break;
            case TwoNumbersSign.Divide:
                console.log(Number(a)/Number(b));
                break;
        }
    }

calc(a)
calc(c)
