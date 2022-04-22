// Main asset module methods:
// - .deepStrictEqual()
// - .strictEqual()
// - .throws()
// - .rejects()
// - .doesNotThrow()
// - .doesNotReject()

import {strict as assert} from 'assert';
import {buildPerson} from "./foobar";


assert.deepStrictEqual(
	buildPerson("Jan", "Testowy"),
	{
		name: 'Jan',
		surname: 'Testowy'
	},

	'Those people are not the same!'
)


assert.strictEqual(2, 2)

console.log("numbers are equal")

assert.deepStrictEqual([1, 2, 5], [1, 2, 5])

console.log("Arrays are mirrored, complately same")

assert.deepStrictEqual("Ala ma kota", "Ala ma kota")

console.log("messages are exact same")

//for synchronous functions only
assert.throws(
	() => buildPerson('', ''),
	{
		message: "Name and surname are mandatory"
	},
	'buildPerson() does not throw message when empty name or surename '
)

console.log("buildPerson() throws proper message")


// //for async functions only
// assert.rejects(
// 	() => buildPerson('', ''),
// 	{
// 		message: "Name and surname are mandatory"
// 	},
// 	'buildPerson() does not throw message when empty name or surename '
// )


assert.doesNotThrow(
	() => buildPerson('Tomasz', 'Stanley'),
	{
		message: "Name and surname are mandatory"
	},
	'buildPerson() throws '
)

console.log("BuildPerson() does not throe")


