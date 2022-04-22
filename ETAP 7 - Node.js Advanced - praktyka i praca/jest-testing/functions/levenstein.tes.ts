import {levensteinDistance} from "./levensteinDistance"
import {strict as assert} from "assert";


console.log( "levensteinDistance() throws on incorrect argument")

assert.strictEqual(
	levensteinDistance("ala", "ada"),
	1,
	"'ala' to  'ada' requires 1 change"
)
console.log("levensteinDistance() returns correct values")


assert.strictEqual(
	levensteinDistance("", ""),
	0,
	"'' to '' has another distance than expected"
)


assert.throws(
	()=> levensteinDistance("Tomek", undefined),
	{
		message: "Incorrect input type"
	}
);
