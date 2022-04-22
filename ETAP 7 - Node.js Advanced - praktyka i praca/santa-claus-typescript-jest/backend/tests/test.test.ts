import {ChildRecord} from "../records/child.record";

test("check if containt", async () => {

	expect([1, 2, 3])
		.not
		.toContain(545)
})

test("check all children", async () => {

	const children = await ChildRecord.listAll();

	// console.log(children)

})


// --------------- MOCKS -------------------------


//dynamic methods with 'prototype'
// const myMock = jest
// 	.spyOn(ChildRecord.prototype, 'insert')
// 	.mockImplementation(async ()=>{
// 		return 'test'
// 	})

//static methods without 'prototype'
const myMock = jest
	.spyOn(ChildRecord, 'getOne')
	.mockImplementation(async (id: string) => {
		return new ChildRecord({
			id,
			name: "testowy",
			giftId: '123'
		})
	})

test("foooo test mock", () => {

	const child = ChildRecord.getOne('123');

	console.log(child)

	expect(child).toBeDefined()


})
