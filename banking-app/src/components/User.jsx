import React, {useState} from 'react'
import AddUser from './AddUser'
import {IoCloseCircleSharp, IoHammerSharp} from 'react-icons/io5'

const User = (props) => {
	let user = props.user
	const [editForm, setEditForm] = useState(false);
	return (
		<div className="user">
			<IoCloseCircleSharp onClick={() => props.onDelete(user.id)} className="delete-icon" />
			<IoHammerSharp onClick={() => {
				setEditForm(!editForm)
			}} className="edit-icon" />
			<h3>{user.first_name} {user.last_name}</h3>
			<p>{user.email}</p>
			<p>{user.age}</p>

			{editForm && <AddUser user={user} onAdd={props.onEdit} />}
		</div>
	)
}

export default User;