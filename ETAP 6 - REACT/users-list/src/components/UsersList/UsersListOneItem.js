import React from 'react';
import "./UsersListOneItem.css"

export const UsersListOneItem = props => {

	const handleDeleteUser = ()=>{
		props.onRemoveItem(props.user.username)
	}

	return (

		<li key={props.user.username}
			className="UsersListOneItem"
		>

			<img
				className="UsersListOneItem__avatar"
				src={`https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/${props.user.picture}`}
				alt={`Photo of ${props.user.first_name}`}/>

			<div className="UsersListOneItem__usernameCard">

				<aside className="UsersListOneItem__usernameCard-userData">
					<p>
						<strong>
							{props.user.first_name} {props.user.last_name}
						</strong>
					</p>
					<p>
						{props.user.username}
					</p>

				</aside>

						<button
							className="UsersListOneItem__usernameCard-delete"
							onClick={handleDeleteUser}
						>Delete
						</button>

			</div>
		</li>)
}
