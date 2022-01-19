// const abc: string = "Hello world!aaaaaaaaa :D";
//
//
// setInterval(() => {
//
//     console.log(abc);
// }, 1000)
//

interface Person {
    name: string;
    age: number;
    isDeveloper: boolean;
    achievements?:string[];

    greet(): void;
}

const personA: Person = {
    name: "Thomas",
    age: 32,
    isDeveloper: true,
    achievements: ['StudiujeIt', 'PluralSight', 'SamurajProgramowania'],

    greet():void {
        console.log(`Hello ${this.name}`)
    }
}

const personB: Person = {
    name: "Caroline",
    age: 26,
    isDeveloper: false,

    greet():void {
        console.log(`Hello ${this.name}`)
    }
}

function dateOfBirth({name, age, isDeveloper, greet}: Person): number {
    const today: number = new Date().getFullYear()
    console.log(`${name}, You has been born in ${today - age} and you are ${isDeveloper ? "developer!" : "not" +
        " developer" +
        " yet."}`);
    return today - age;
}

console.log(dateOfBirth(personA));
console.log(dateOfBirth(personB));

console.log(personA.achievements);
console.log(personB.achievements);
