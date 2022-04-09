import React from 'react';
import {GiftEntity} from "../../types/gifts";
import {GiftTableRow} from "./GiftTableRow";

interface Props {
	gifts: GiftEntity[];
}

export const GiftsTable = (props:Props) => (

	<table>
		<thead>
		<tr>
			<th>ID</th>
			<th>Name</th>
			<th>Count</th>
		</tr>
		<tbody>
		{
			props.gifts.map(gift=><GiftTableRow gift={gift} key={gift.id}/>)

		}


		</tbody>
		</thead>



	</table>



)
