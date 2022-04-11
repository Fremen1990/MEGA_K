import {ChangeEvent, createContext, useState} from "react";
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

interface CalculatorContextType {
	first: number;
	second: number;
	result: number | string ;
	history: string[];
	addHistory: (line: string) => void;
	clearHistory: () => void;
	handleFirstChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handleSecondChange: (e: ChangeEvent<HTMLInputElement>) => void;
	setOperationResult: (operationResult: number| string) => void;
}

export const CalculatorContext = createContext<CalculatorContextType | null>(null);

export const Calculator = () => {

	const [first, setFirst] = useState<number>(0);
	const [second, setSecond] = useState<number>(0);
	const [result, setResult] = useState<number | string>("");
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

	const clearHistory = () => {
		setHistory([])
	}

	return (
		<div>
			<CalculatorContext.Provider value={{
				first,
				second,
				result,
				history,
				addHistory,
				clearHistory,
				setOperationResult,
				handleFirstChange,
				handleSecondChange
			}}>
				<CalculatorForm/>
				<CalculatorReasults/>
				<CalculatorButtons/>
				<CalcatorHistory/>

			</CalculatorContext.Provider>
		</div>
	)
}
