import React, {useState} from 'react'
import Header from './components/Header'
import Users from './components/Users'
import AddUser from './components/AddUser'
import users from './data'

function App() {
	const [card, setCard] = useState(users);
	const deleteUser = (id) => {
		setCard((card) => card.filter((el) => el.id !== id));
	}
	/*const deleteUser = (id) => {
		setCard((card) => {
			card.forEach((el, index) => {
				if (id == el.id) {
					card.splice(index, 1);
				}
			});
		});
	}*/

	const [edit, setEdit] = useState(users);
	const editUser = (id) => {
		setEdit((edit) => {
			return edit.map((user) => {
				let allUsers = users
				allUsers[user.id - 1] = user
				setEdit((edit) => {
					edit = [];
					edit = [...allUsers];
				});
			})
		})
	}
	const [add, setAdd] = useState({users});
	const addUser = (id) => {
		setAdd((edit) => {
			const id = users.length + 1
			return add.map((user) => {
				setAdd((edit) => {
					users = [...this.state.users, {id, ...user}];
				});
			})
		})
	}
	return (
		<div>
			<Header title="Список пользователей" />
			<main>
				<Users users={users} onEdit={editUser} onDelete={deleteUser} />
			</main>
			<aside>
				<AddUser onAdd={addUser} />
			</aside>
		</div>
	);
}

export default App