// Nie zmieniaj poniższego kodu OPRÓCZ dodawania odpowiednich typów

interface Person {
    name:string
}

// @ts-ignore
class User implements Person{
    name:string;

    constructor(name:string) {
        this.name = name;
    }
}

const json:string = '{"name":"Jan"}';
const {name} = JSON.parse(json) as User;
let user:string | User = name === '' ? '' : `User ${name}`;

if (user !== '') {
    user = new User(user);
}

console.log(user);
