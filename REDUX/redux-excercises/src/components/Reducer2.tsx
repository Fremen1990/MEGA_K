import {useReducer, useState} from "react";

interface User {
	name:string;
	lastName:string;
	age:number;
}


interface ChangeNameAction{
	type:'CHANGE_NAME';
	payload:string;
}
interface ChangeLastName{
	type:'CHANGE_LAST_NAME';
	payload:string;
}
interface IncrementAgeAction{
	type:'INCREMENT_AGE';
}

type UserAction= ChangeNameAction|ChangeLastName|IncrementAgeAction;

const initialState:User ={
	name:"Thomas",
	lastName:"Dev",
	age:31
}

const userReducer= (state:User, action:UserAction)=>{
switch(action.type){
	case 'CHANGE_NAME':{
		return {
			...state,
			name:action.payload
		}
	}
	case 'CHANGE_LAST_NAME':{
		return {
			...state,
			lastName:action.payload
		}
	}
	case 'INCREMENT_AGE':{
		return {
			...state,
			age:state.age+1
		}
	}
	default:
		return state;
}
}

export const Reducer2 = ()=>{


	const [user,dispatch] = useReducer(userReducer, initialState);



	return <div>
		<h1>
			{user.name} {user.lastName} {user.age}
		</h1>
		<button onClick={()=>dispatch({type:'CHANGE_NAME', payload: 'MARIO'})} >Change name </button>
		<button onClick={()=>dispatch({type:'CHANGE_LAST_NAME', payload: 'BROS'})} >Change last name </button>
		<button onClick={()=>dispatch({type:'INCREMENT_AGE'})}>Get older </button>
	</div>
}
