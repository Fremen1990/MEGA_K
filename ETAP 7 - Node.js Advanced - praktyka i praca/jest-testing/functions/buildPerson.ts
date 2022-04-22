export const  buildPerson = (firstName: string, lastName: string) => {
	if (!firstName || !lastName) {
		throw new Error("Name and surname are mandatory")
	}

	// throw new Error("OHH ERROR")

	return {
		name: firstName,
		surname: lastName,
	}
}

const max=45;
const min=33;

export const getBodyTemperature = ():number=>Math.random()*(max-min)+min;
