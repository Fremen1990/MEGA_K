import React, {useEffect, useState} from 'react';
import {GiftsTable} from "./GiftsTable"
import {GiftEntity} from 'types'

export const GiftsList = () => {

	const [giftsList, setGiftsList] = useState<GiftEntity[] | null>(null);

	useEffect(() => {

		(async () => {
			const res = await fetch('http://localhost:3001/gift')
			const data = await res.json();
			console.log(data)
			await setGiftsList(data.giftsList)

		})();

	}, [])

	if (giftsList === null) {
		return <p>Loading...</p>
	}

	return (
		<>
			<h1>Gifts List</h1>
			<GiftsTable gifts={giftsList}/>
		</>
	)

}
