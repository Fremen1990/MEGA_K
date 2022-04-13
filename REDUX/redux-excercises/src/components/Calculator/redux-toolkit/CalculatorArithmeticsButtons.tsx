import {Operation} from "./Calculator";
import {RootState} from "./store";
import {useDispatch, useSelector} from "react-redux";
import {addToHistory, setResult} from "./features/calculator/calculator-slice";

export const CalculatorArithmeticsButtons = () => {

	const dispatch = useDispatch()

	const {first, second} = useSelector((store: RootState) => store.calculator)

	const handleSetOperationResult = (result: number | string) => {
		dispatch(setResult(result))
	}

	const handleAddHistory = (line:string)=>{
		dispatch(addToHistory(line))
	}

	const handleOperation = (operation: Operation) => {

		switch (operation) {
			case Operation.ADD: {
				const operationResult = first + second
				handleSetOperationResult(operationResult)
				handleAddHistory(`Added ${first} to ${second} and got ${operationResult}`)
				break;
			}
			case Operation.SUBTRACT: {
				const operationResult = first - second
				handleSetOperationResult(operationResult)
				handleAddHistory(`Subtracted ${first} minus ${second} and got ${operationResult}`)
				break;
			}
			case Operation.MULTIPLY: {
				const operationResult = first * second
				handleSetOperationResult(operationResult)
				handleAddHistory(`Multiplied ${first} with ${second} and got ${operationResult}`)
				break;
			}
			case Operation.DIVIDE: {
				if (second === 0) {
					handleSetOperationResult("Cannot divide by 0")
				} else {
					const operationResult = first / second
					handleSetOperationResult(operationResult)
					handleAddHistory(`Divided ${first} with ${second} and got ${operationResult}`)
					break;
				}
				break;
			}
		}
	}
	return <>

		<button onClick={() => handleOperation(Operation.ADD)}>+</button>
		<button onClick={() => handleOperation(Operation.SUBTRACT)}>-</button>
		<button onClick={() => handleOperation(Operation.MULTIPLY)}>*</button>
		<button onClick={() => handleOperation(Operation.DIVIDE)}>/</button>

	</>
}
