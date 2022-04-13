import {configureStore} from "@reduxjs/toolkit";
import {calculatorSlice} from "../features/calculator/calculator-slice";


export const store = configureStore({
	reducer:{
		calculator:calculatorSlice.reducer
	}
})

//export types from store
export type RootState = ReturnType<typeof store.getState>
