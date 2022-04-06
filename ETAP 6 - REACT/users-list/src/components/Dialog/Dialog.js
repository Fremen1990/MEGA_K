import React from 'react';
import './Dialog.css'

export const Dialog = props=>(
	<div className="Dialog__container">

		{props.title && 		<div className="Dialog__title"> {props.title}</div> }




		<div className="Dialog__content">
			{props.children}

		</div>
	</div>
)


