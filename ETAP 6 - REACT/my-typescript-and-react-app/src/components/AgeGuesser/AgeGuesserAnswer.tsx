import React, {useEffect, useState} from "react";

interface Props {
	name: string;

}

export const AgeGuesserAnswer = (props: Props) => {

	const [age, setAge] = useState(null);
	const [error, setError] = useState(null)

	useEffect(() => {

		async function fetchData() {
			const res = await fetch(`https://api.agify.io?name=${props.name}`)
			const data = await res.json();
			console.log(data)
			setAge(data.age)
		}

		try {
			fetchData()
		} catch (e) {
			// setError(e)
		}

	}, []);

	if (age === null) return <p>loading...</p>;

	if (error) return <p>{error}</p>

	return <>

		<p>Your age: {age}</p>
		<p>Your date of birth: {new Date().getFullYear() - age}</p>
	</>

}
