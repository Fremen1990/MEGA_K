import {ChangeEvent, useState} from "react";
import {CalculatorForm} from "./CalculatorForm";
import {CalculatorButtons} from "./CalculatorButtons";
import {CalculatorReasults} from "./CalculatorReasults";
import {CalcatorHistory} from "./CalculatorHistory";

export enum Operation {
	ADD,
	SUBTRACT,
	MULTIPLY,
	DIVIDE
}

export const Calculator = () => {

	const [first, setFirst] = useState<number>(0);
	const [second, setSecond] = useState<number>(0);
	const [result, setResult] = useState<number | string>();
	const [history, setHistory] = useState<string[]>([]);


	const handleFirstChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFirst(Number(e.target.value));
	}


	const handleSecondChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSecond(Number(e.target.value));
	}

	const addHistory = (line: string) => {
		setHistory(prevHistory => [...prevHistory, line])
	}

	const setOperationResult = (operationResult: number | string) => {
		setResult(operationResult)
	}

const clearHistory = () =>{
		setHistory([])
}

	return (
		<div>

			<CalculatorForm
				first={first}
				second={second}
				handleFirstChange={handleFirstChange}
				handleSecondChange={handleSecondChange}
			/>

			<CalculatorReasults
				first={first}
				second={second}
				result={result}
			/>
			<CalculatorButtons
				first={first}
				second={second}
				setOperationResult={setOperationResult}
				addHistory={addHistory}
				history={history}
				clearHistory={clearHistory}
			/>

			<CalcatorHistory history={history}/>

		</div>
	)
}
