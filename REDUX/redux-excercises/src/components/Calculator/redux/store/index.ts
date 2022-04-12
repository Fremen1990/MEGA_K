import {combineReducers, createStore} from "redux";
import calculatorReducer from "../reducers/calculator-reducer";

const rootReducer = combineReducers({
	calculator:calculatorReducer
})

export const store = createStore(rootReducer)

//export types from store
export type RootState = ReturnType<typeof store.getState>


// {
//
// 	calculator:{
// 		first:number;
// 		second:number;
// 		result:number|string;
// 		history:string[]
// 	}
// }
