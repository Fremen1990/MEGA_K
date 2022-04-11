import {useRef, useState} from "react";

export const Ref = () => {

	const [random, setRandom] = useState<number>(0)
	const randomRef = useRef<number | null>(null)
	const inputRef = useRef<HTMLInputElement | null>(null);


	const handleClick = () => {
		if (inputRef.current) {
			inputRef.current.focus()
		}
	}

	const randomize = () => {
		randomRef.current=random;
		setRandom(Math.random() * 100)
		console.log(random)
	}

	return (
		<>
			<h1>{random}</h1>
			<h2>{randomRef.current }</h2>
			<input ref={inputRef} type="text"/>
			<button onClick={handleClick}>Click me</button>
			<button onClick={randomize}>Random!</button>
		</>
	)
}
