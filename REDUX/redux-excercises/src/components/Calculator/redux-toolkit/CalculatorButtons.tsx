import {CalculatorArithmeticsButtons} from "./CalculatorArithmeticsButtons";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./store";
import {clearHistory} from "./features/calculator/calculator-slice";


export const CalculatorButtons = () => {

	const dispatch = useDispatch()

	const {history}:any = useSelector((store:RootState)=>store.calculator)

	const handleClearHistory = () =>{
		dispatch(clearHistory())
	}


	return (<>
			<CalculatorArithmeticsButtons/>
			<button onClick={handleClearHistory}>Clear History ({history.length})</button>
		</>

	)
}
