import React, {ChangeEvent, useCallback, useState} from 'react';


interface Props {
	items:string[];
	onDelete:(toDelete:number)=>void;
}

const ItemsList = React.memo(({items, onDelete}:Props)=>{
	console.log("ItemsList had been rendered")
	return <ul>
		{items.map((item, index)=><li key={item}>{item}
		<button onClick={()=> onDelete(index)}>Delete</button>
		</li>)}
	</ul>
})

export const List = ()=>{

	const [items, setItems]=useState<string[]>(['a','b','c','d','e','f','g','h','i','j']);

	const [value, setValue]=useState<string>('')

	const handleDelete = useCallback((toDelete:number)=>{
		setItems(prevItems => prevItems.filter((item, index)=> index !== toDelete))
	},[])

const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
setValue(e.target.value)
}

	return <div>

		<input
			value={value}
		onChange={handleChange}
		/>

		<ItemsList
			items={items}
			onDelete={handleDelete}
		/>
	</div>


}
