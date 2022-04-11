import {Operation} from "./Calculator"
import {CalculatorArithmeticsButtons} from "./CalculatorArithmeticsButtons";

interface Props {
	setOperationResult: (result: number | string) => void;
	addHistory: (line: string) => void;
	clearHistory: () => void;
	history: string[];
	first: number;
	second: number;
}

export const CalculatorButtons = ({first, second, setOperationResult, addHistory, clearHistory, history}: Props) => {


	return (<>
			<CalculatorArithmeticsButtons
				first={first}
				second={second}
				setOperationResult={setOperationResult}
				addHistory={addHistory}
			/>

			<button onClick={clearHistory}>Clear History ({history.length})</button>
		</>

	)
}
