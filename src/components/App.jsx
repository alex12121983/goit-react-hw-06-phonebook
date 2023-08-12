import Phonebook from './Phonebook/Phonebook'
import ContactList from './ContactList/ContactList'
import Filter from './Filter/Filter'
import css from './App.module.css'

const App = () => {

	return (
		<div className={css.container}>
			<h2>Phonebook</h2>
			<Phonebook />
			<h2>Contacts</h2>
			<Filter />
			<ContactList />
		</div>
	)
}

export default App

