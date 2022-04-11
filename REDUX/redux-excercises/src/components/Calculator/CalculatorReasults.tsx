interface Props {
	result: number | string | undefined;
	first:number;
	second:number;
}

export const CalculatorReasults = ({first, second,result}: Props) => {
	return (<>
			<h1>{result}</h1>

<p>For values {first} and {second} </p>
		</>


	)
}




