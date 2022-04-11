import {useContext} from "react";
import {CalculatorContext} from "./Calculator";



export const CalculatorReasults = () => {

	const context = useContext(CalculatorContext);

	if(!context) return null

	const {first, second, result} = context;

	return (<>
			<h1>{result}</h1>

<p>For values {first} and {second} </p>
		</>


	)
}




