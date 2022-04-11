import React, {useCallback, useEffect, useState} from 'react';

interface Props{
	handler: ()=> void;
}

const Foo = ({handler}:Props)=>{
	useEffect(() => {
		return () => {
		handler()
		};
	}, [handler]);

	return(
		<h1>Hi man!</h1>
	)
}

export const Counter = () =>{
	const [counter, setCounter]=useState<number>(0);
	const [randomValue,setRandomValue]=useState<number>(0)

	const handler = useCallback(() =>{
		console.log(counter)
	},[counter])

	useEffect(()=>{

		const interval = setInterval(()=>{
			setCounter(prevCounter => prevCounter+1);
		},1000)

		const interval2 = setInterval(()=>{
			setRandomValue(Math.random())
		},500)

		return()=>{
			clearInterval(interval)
			clearInterval(interval2)
		}

	},[])

	return <Foo handler={handler}/>
}
