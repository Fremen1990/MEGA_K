import React, {useEffect, useState} from 'react';
import {BinanceOneCryptoPairData} from "../../types/crypto-data";
import {CryptoPriceOfOnePair} from "./CryptoPriceOfOnePair";



export const CryptoPrice = () => {

const [data, setData] = useState<BinanceOneCryptoPairData [] |null>(null);
const [pair,setPair]=useState<string>('');



	useEffect(()=>{

		(async ()=>{

			const result = await fetch('https://api2.binance.com/api/v3/ticker/24hr');
			const data = await result.json();
			setData(data)
console.log(data[0].symbol)
		})();

	},[])

	if(data===null) return <p>Loading data...</p>


	return <>


		<label >Choose Crypto Pair

			<select
			value={pair}
			onChange={e=> setPair(e.target.value)}
			>

				{data
					.map(crypto=>
						<option
							value={crypto.symbol}
							key={crypto.symbol}
						>
							{crypto.symbol}
						</option>)}

			</select>

		</label>

		{pair && <CryptoPriceOfOnePair onePair={data.find(one => one.symbol === pair) as BinanceOneCryptoPairData}/>
		}
	</>
}
