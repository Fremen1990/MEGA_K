import React, {useState} from 'react';

import './ColorBox.css'

export const ColorBox = props => {

	const [backgroundColor, setBackgroundColor] = useState('#ff0000')

	return <>
		<div className="ColorBox__box" style={{backgroundColor}}>

			<select
				value={backgroundColor}
				onChange={e => setBackgroundColor(e.target.value)}
			>
				<option value="#ff0000">Red</option>
				<option value="#00ff00">Green</option>
				<option value="#0000ff">Blue</option>

			</select>

			<input
				type="color"
				value={backgroundColor}
				onChange={e=>setBackgroundColor(e.target.value)}
			/>
			</div>
		</>
		}
