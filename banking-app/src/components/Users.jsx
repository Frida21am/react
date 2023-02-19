import React from 'react'
import User from './User.jsx'

const Users = (props) => {
	if (props.users.length > 0)
		return (<div>
			{props.users.map((el) => (
				<User onEdit={props.onEdit} onDelete={props.onDelete} key={el.id} user={el} /> 
			))}
		</div>)
	else
		return (
			<div className="user">
				<h3>Пользователей нет</h3>
			</div>
		)
}

export default Users;