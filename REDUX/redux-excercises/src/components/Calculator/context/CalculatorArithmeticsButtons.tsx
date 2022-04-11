import {CalculatorContext, Operation} from "./Calculator";
import {useContext} from "react";


export const CalculatorArithmeticsButtons = ()=>{

	const context = useContext(CalculatorContext);
	if (!context) return null
	const {first, second, setOperationResult, addHistory} = context;


	const handleOperation = (operation: Operation) => {

		switch (operation) {
			case Operation.ADD: {
				const operationResult = first + second
				setOperationResult(operationResult)
				addHistory(`Added ${first} to ${second} and got ${operationResult}`)
				break;
			}
			case Operation.SUBTRACT: {
				const operationResult = first - second
				setOperationResult(operationResult)
				addHistory(`Subtracted ${first} minus ${second} and got ${operationResult}`)
				break;
			}
			case Operation.MULTIPLY: {
				const operationResult = first * second
				setOperationResult(operationResult)
				addHistory(`Multiplied ${first} with ${second} and got ${operationResult}`)
				break;
			}
			case Operation.DIVIDE: {
				if (second === 0) {
					setOperationResult("Cannot divide by 0")
				} else {
					const operationResult = first / second
					setOperationResult(operationResult)
					addHistory(`Divided ${first} with ${second} and got ${operationResult}`)
					break;
				}
				break;
			}
		}
	}
	return<>

		<button onClick={() => handleOperation(Operation.ADD)}>+</button>
		<button onClick={() => handleOperation(Operation.SUBTRACT)}>-</button>
		<button onClick={() => handleOperation(Operation.MULTIPLY)}>*</button>
		<button onClick={() => handleOperation(Operation.DIVIDE)}>/</button>

	</>
}
