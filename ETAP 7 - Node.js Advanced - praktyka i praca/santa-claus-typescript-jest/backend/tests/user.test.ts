import {User} from "../records/user";

let user:User;

beforeAll(async() => {
	user=new User();
})

test("User should not be logged in at the beginning", ()=>{

	expect(user.loggedIn).toEqual(false);

})

test("User should not have email at the beginning", ()=>{

	expect(user.email).toBeNull();

})

// test("User logged in state should not be modified outside of the class", ()=>{
//
// 	expect(()=> {
// 		user.loggedIn = true;
// 	}).toThrow();
//
// })

// test("User email state should not be modified outside of the class", ()=>{
//
// 	expect(()=> {
// 		user.email = '...';
// 	}).toThrow();
//
// })


