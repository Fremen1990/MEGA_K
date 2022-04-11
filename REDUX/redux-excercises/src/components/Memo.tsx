import {useEffect, useMemo, useState} from "react";

const veryHardCalculation = (value: number) => {
	let result = 0;

	console.log('STARTED CALCULATION')

	for (let i = 0; i < 1000000 * value; i++) {
		if (i % 2 === 0) {
			result += 1;
		} else {
			result /= .25;
		}
	}
	console.log("CALCULATED RESULT",  result)

	return result;
}


export const Memo = () => {

	const [counter, setCounter] = useState<number>(0);
	const [randomValue, setRandomValue] = useState<number>(0)

	const randomize = () => {
		setRandomValue(Math.random())
	}


	const finalValue = useMemo(()=>veryHardCalculation(counter),[counter])

	useEffect(() => {
		setInterval(() => {
			setCounter(prevCounter => prevCounter + 1)
		}, 2000)

	}, [])

	return <div>

		<h1>{finalValue}</h1>
		<h2>{counter} </h2>
			<button onClick={randomize}>Click Me</button>
			</div>

		}
