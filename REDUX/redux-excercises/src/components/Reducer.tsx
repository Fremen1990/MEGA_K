import {useState} from "react";

interface User {
	name:string;
	lastName:string;
	age:number;
}

export const Reducer = ()=>{
	const [user,setUser]=useState<User>({
		name:'Tomasz',
		lastName:'Stanley',
		age:31
	})

const changeName=(name:string)=>{
		setUser(prevUser=>({
			...prevUser,
			name
		}))
}
	const changeLastName=(lastName:string)=>{
		setUser(prevUser=>({
			...prevUser,
			lastName
		}))
	}
	const incrementAge = ()=>{
		setUser(prevUser=>({
			...prevUser,
			age:prevUser.age +1
		}))}


	return <div>
		<h1>
			{user.name} {user.lastName} {user.age}
		</h1>
		<button onClick={()=>changeName("Mario")} >Change name </button>
		<button onClick={()=>changeLastName("Bros")} >Change last name </button>
		<button onClick={incrementAge} >Get older </button>
	</div>
}
