import React from "react";
import {BinanceOneCryptoPairData} from "../../types/crypto-data";
import {inspect} from "util";

interface Props {
	onePair: BinanceOneCryptoPairData;
}

export const CryptoPriceOfOnePair = (props: Props) => (
	<p style={{backgroundColor: Number(props.onePair.priceChangePercent) > 0 ? 'green' : 'red'}}>{props.onePair.symbol} actually
		have price {props.onePair.weightedAvgPrice}</p>
)
