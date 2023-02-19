import React, { useState } from 'react';

const AddUser = (props) => {
	let userAdd = {}
	const [addUser, setAddUser] = useState({
		first_name: "",
		last_name: "",
		email: "",
		age: 1
	})
	let myForm;
	return (
		<form ref={(el) => myForm = el}>
			<input placeholder="Имя" onChange={(e) => setAddUser({first_name: e.target.value})} />
			<input placeholder="Фамилия" onChange={(e) => setAddUser({last_name: e.target.value})} />
			<input placeholder="E-mail" onChange={(e) => setAddUser({email: e.target.value})} />
			<input placeholder="Возраст" onChange={(e) => setAddUser({age: e.target.value})} />
			<button type="button" onClick={() => {
				myForm.reset()
				userAdd = {
					first_name: this.first_name,
					last_name: this.last_name,
					email: this.email,
					age: this.age
				}
				if(props.user)
					userAdd.id = props.user.id
					props.onAdd(userAdd)
				}
			}>Добавить</button>
		</form>
	)
}

export default AddUser;