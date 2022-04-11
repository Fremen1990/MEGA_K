interface Props {
history:string[]
}

export const CalcatorHistory=({history}:Props)=>{



return <ul>
		{history.map((historyItem, index) => <li  key={index}> {historyItem}</li>)}
	</ul>
}
