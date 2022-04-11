import {useContext} from "react";
import {CalculatorContext} from "./Calculator";

export const CalcatorHistory=()=>{

	const context = useContext(CalculatorContext);

	if(!context) return null

	const { history} = context;

return <ul>
		{history.map((historyItem, index) => <li  key={index}> {historyItem}</li>)}
	</ul>
}
