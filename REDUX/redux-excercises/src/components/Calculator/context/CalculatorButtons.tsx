import {CalculatorContext, Operation} from "./Calculator"
import {CalculatorArithmeticsButtons} from "./CalculatorArithmeticsButtons";
import {useContext} from "react";


export const CalculatorButtons = () => {

	const context = useContext(CalculatorContext);

	if (!context) return null

	const {clearHistory, history} = context;

	return (
		<>

			<CalculatorArithmeticsButtons/>

			<button onClick={clearHistory}>Clear History ({history.length})</button>
		</>

	)
}
