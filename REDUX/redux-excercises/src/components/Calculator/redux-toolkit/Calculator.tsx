import {CalculatorForm} from "./CalculatorForm";
import {CalculatorButtons} from "./CalculatorButtons";
import {CalculatorReasults} from "./CalculatorReasults";
import {CalculatorHistory} from "./CalculatorHistory";
import {Provider} from "react-redux";
import {store} from "./store";

export enum Operation {
	ADD,
	SUBTRACT,
	MULTIPLY,
	DIVIDE
}

export const Calculator = () => {

	return (
		<div>
			<Provider store={store}>
				<CalculatorForm/>
				<CalculatorReasults/>
				<CalculatorButtons/>
				<CalculatorHistory/>
			</Provider>
		</div>
	)
}
