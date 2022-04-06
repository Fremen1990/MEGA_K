import React, {useState} from 'react'
import "./UsersList.css"
import {UsersListOneItem} from "./UsersListOneItem";

export const UsersList = props => {

	const users = props.users;

	const [list, setList] = useState(users);

	const removeItem = (username) => {

		setList(list =>(
			list.filter(oneItem=>oneItem.username !==username)
		))
	}

	return (
		<ul className="UsersList">
			{
				[...list]
					.sort((a, b) => a.username.localeCompare(b.username))
					.map(user => <UsersListOneItem
						key={user.username}
						user={user}
						onRemoveItem={removeItem}
					/>)}
		</ul>
	)
}
