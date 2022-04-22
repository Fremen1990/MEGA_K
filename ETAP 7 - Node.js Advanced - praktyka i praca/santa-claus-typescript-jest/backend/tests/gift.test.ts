import {GiftRecord} from "../records/gift.record";
import {pool} from "../utils/db";

let gift: GiftRecord

beforeAll(()=>{
	// 1. Clear all tested database
	// 2. Return data before changes

	gift = new GiftRecord({
		name: "TestGift",
		count: 999
	})
})

afterAll(async () => {
	await pool.end();
})

test("Not inserted GiftRecord should have no id", async () => {

	console.log(gift)
	expect(gift.id).toBeUndefined();

})

test("Inserted GiftRecord should have an id", async () => {

	await gift.insert();

	console.log(gift)

	expect(gift.id).toBeDefined()
	expect(gift.id).toMatch(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/)
})
