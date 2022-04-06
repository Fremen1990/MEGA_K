import React, {useEffect, useState} from "react";
import {AgeGuesserAnswer} from "./AgeGuesserAnswer";

export const AgeGuesser = props => {


	const [name, setName] = useState('');
	const [check, setCheck]= useState(false);


	const sendForm =e=>{
		e.preventDefault();
		setCheck(true)
	}

	if(check) return <AgeGuesserAnswer name={name}/>

	return <form onSubmit={sendForm}>
		<label >
			Type your name: <br/>
			<input
				type="text"
			value={name}
			onChange={e=>setName(e.target.value)}
			/>
			<button>Guess my name</button>
		</label>
	</form>

	return <AgeGuesserAnswer name="Zuzanna"/>
}
