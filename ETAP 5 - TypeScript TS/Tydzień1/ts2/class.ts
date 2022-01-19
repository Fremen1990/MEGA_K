interface Person{
    name:string;
    age:number;
}

class Person {
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const thomas:Person = new Person("Thomas", 32);

console.log(thomas)
