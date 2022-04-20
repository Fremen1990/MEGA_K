import {buildPerson} from "../functions/buildPerson";

test('Test if person name and surname are defined', ()=>{
	expect(buildPerson("JakieśImię", "JakieśNazwisko")).toBeDefined()
})
