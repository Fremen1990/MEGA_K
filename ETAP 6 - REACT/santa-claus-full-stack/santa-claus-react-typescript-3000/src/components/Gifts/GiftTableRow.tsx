import React, {MouseEvent} from 'react';
import {GiftEntity} from 'types';


interface Props {
	gift: GiftEntity;
}

export const GiftTableRow = (props: Props) => {


const  deleteGift = async (e: MouseEvent)=>{
	e.preventDefault();

	if(!window.confirm(`Are you sure you want to remove ${props.gift.name}`)){
return;
	}
await fetch(`http://localhost:3001/gift/${props.gift.name}`, {
	method:'DELETE'
})
	}

	//TODO 22 min WEEK 5 DAY 3

	return (

		<tr>
			<td>{props.gift.id}</td>
			<td>{props.gift.name}</td>
			<td>{props.gift.count}</td>
			<td>
				<a
					href="#"
				onClick={deleteGift}
				>🚮</a>
			</td>


		</tr>

	)
}
