import {RootState} from "./store";
import {useSelector} from "react-redux";

export const CalculatorHistory=()=>{

	const {history}:any = useSelector((store:RootState)=>store.calculator)

return <ul>
		{ history.map((line:string, index:number) => <li  key={index}> {line}</li>) }
	</ul>
}
