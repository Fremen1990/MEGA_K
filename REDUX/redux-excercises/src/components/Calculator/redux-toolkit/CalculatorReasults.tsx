import {RootState} from "./store";
import {useSelector} from "react-redux";

export const CalculatorReasults = () => {

	const {first, second, result} = useSelector((store:RootState)=>store.calculator)

	return (<>
			<h1>{result}</h1>

<p>For values {first} and {second} </p>
		</>


	)
}




