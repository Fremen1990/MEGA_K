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
