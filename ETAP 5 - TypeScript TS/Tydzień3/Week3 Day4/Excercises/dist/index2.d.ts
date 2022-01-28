declare class Test {
    private userName;
    private userGender;
    constructor(userName: string, userGender: string);
    get name(): string;
    set name(newName: string);
    get gender(): string;
    set gender(newGender: string);
}
declare const foobar: Test;
