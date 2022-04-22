import {buildPerson, getBodyTemperature} from "../functions/buildPerson";

test('Test if person name and surname are defined', ()=>{
	expect(buildPerson("JakieśImię", "JakieśNazwisko")).toBeDefined()
})

test("Check body min and max temperature",()=>{

	expect(getBodyTemperature()).toBeGreaterThan(33)
	expect(getBodyTemperature()).toBeLessThanOrEqual(45)

})

test("check if throw", ()=>{
	expect(()=>buildPerson("", "")).toThrow()
})

