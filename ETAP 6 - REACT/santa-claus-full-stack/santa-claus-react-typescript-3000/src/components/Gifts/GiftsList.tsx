import React, {useEffect, useState} from 'react';
import {GiftsTable} from "./GiftsTable"
import {GiftEntity} from 'types'
import {Spinner} from "../Spinner/Spinner";

export const GiftsList = () => {

	const [giftsList, setGiftsList] = useState<GiftEntity[] | null>(null);

	const refreshGifts = async () => {
		setGiftsList(null)
		const res = await fetch('http://localhost:3001/gift')
		const data = await res.json();
		console.log(data)
		await setGiftsList(data.giftsList)

	}

	useEffect(() => {
		refreshGifts();
	}, [])

	if (giftsList === null) {
		return <Spinner/>
	}

	return (
		<>
			<h1>Gifts List</h1>
			<GiftsTable
				gifts={giftsList}
				onGiftsChange={refreshGifts}
			/>
		</>
	)

}
