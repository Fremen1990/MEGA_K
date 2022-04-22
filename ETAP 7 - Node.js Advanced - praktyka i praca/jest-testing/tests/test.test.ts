// expect - chain methods
// 		.toBe()
// 		.toEqual()
// 		.toBeNull()
//		.toBeUndefined()
//		.toBeDefined()
//		.toBeTruthy()
// 		.toBeFalsy()
// 		.toBeGreaterThan()
// 		.toBeLessThan(), .toBeLessThanOrEqual(), toBeCloseTo()


test('adds 1 + 2 to equal 3', () => {
	expect(1 + 2).toBe(3)
})

// example failed test
// test('adds 1 + 2 to equal 6', () => {
// 	expect(1 + 2).toBe(6)
// })

// test failed with cool comment from jest
// test("compare arrays", ()=>{
// 	expect([1,2,3]).toBe([1,2,3])
// })


test("compare arrays", ()=>{
	expect([1,2,3]).toStrictEqual([1,2,3])
})

test("Compare if two objects are equal", ()=>{

	const person1={
		firstName: "John",
		lastName: "Test",
		age:999
	}

	// const person2={
	// 	...person1,
	// 	lastName: "nextTest",
	// 	bio:"lorem ipsumorem"
	// }

	const person2={
		...person1
	}

	expect(person1).toStrictEqual(person2)

})

test("Check if null", ()=>{
	expect(null).toBeNull()
})

test("Check if defined", ()=>{
	expect("Ala kota ma").toBeDefined()
})

test("check regex 'to match' ", ()=>{

	expect("Ala ma kot, a kot ale ma").toMatch(/kot/)

})


// test("foobar just test", ()=>{
// 	expect(.2+.1).toEqual(.3)
// })

test("check to be close with rounfings", ()=>{
	expect(.2+.1).toBeCloseTo(.3)
})

test("check if contain",()=>{

	expect([1,3,6,5]).toContain(3)

})


test("check if contain",async ()=>{

	expect([1,3,6,5])
		.not
		.toContain(666)

})
