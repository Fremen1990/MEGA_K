class Test {
    constructor(private userName: string, private userGender: string) {
    }

    get name(): string {
        return this.userName;
    }

    set name(newName: string) {
        if (!['Bartek', 'Kuba'].includes(newName)) {
            throw new Error('Invalid name!')
        }
        this.userName = newName;
    }

    get gender(): string {
        return this.userGender;
    }

    set gender(newGender: string) {
        if (!['woman', 'man'].includes(newGender)) {
            throw new Error('Invalid gender!')
        }
        this.userGender = newGender;
    }
}

const foobar = new Test('Bartek', 'woman');
foobar.name = 'Kuba';
foobar.gender = 'woman';
console.log(foobar.name, foobar.gender);

