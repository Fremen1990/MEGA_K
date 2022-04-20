import {strict as assert} from 'assert';
import {buildPerson} from "./foobar";


assert.deepStrictEqual(
	buildPerson("Jan", "Testowy"),
	{
	name:'Jan',
	surname:'Testowy'
},
	{
		name:"Jan",
		surname:"Testowy"
	},
	"Those people are not the same!"

)
