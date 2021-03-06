import React, {MouseEvent} from 'react';
import {GiftEntity} from 'types';


interface Props {
	gift: GiftEntity;
	onGiftsChange:()=>void
}


export const GiftTableRow = (props: Props) => {


	const deleteGift = async (e: MouseEvent) => {
		e.preventDefault();

		if (!window.confirm(`Are you sure you want to remove ${props.gift.name}`)) {
			return;
		}

		const res = await fetch(`http://localhost:3001/gift/${props.gift.id}`, {
			method: 'DELETE',
		})

		console.log(res)

		if ([400, 500].includes(res.status)) {
			const error = await res.json()
			alert(`Error occured: ${error.message}`);
			return;
		}

		props.onGiftsChange();

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
