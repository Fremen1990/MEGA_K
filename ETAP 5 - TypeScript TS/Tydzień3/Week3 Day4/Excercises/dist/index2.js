class Test {
    constructor(userName, userGender) {
        this.userName = userName;
        this.userGender = userGender;
    }
    get name() {
        return this.userName;
    }
    set name(newName) {
        if (!['Bartek', 'Kuba'].includes(newName)) {
            throw new Error('Invalid name!');
        }
        this.userName = newName;
    }
    get gender() {
        return this.userGender;
    }
    set gender(newGender) {
        if (!['woman', 'man'].includes(newGender)) {
            throw new Error('Invalid gender!');
        }
        this.userGender = newGender;
    }
}
const foobar = new Test('Bartek', 'woman');
foobar.name = 'Kuba';
foobar.gender = 'woman';
console.log(foobar.name, foobar.gender);
//# sourceMappingURL=index2.js.map