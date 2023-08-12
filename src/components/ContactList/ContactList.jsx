import ContactItem from '../ContactItem/ContactItem'
import PropTypes from "prop-types";
import css from './ContactList.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'store/contacts/contactsSlice';
import { getContacts, getFilter } from 'store/contacts/selectors';

const ContactList = () => {

	const contacts = useSelector(getContacts)
    const filter = useSelector(getFilter)
    
    const dispatch = useDispatch()
    
    const filterContacts = contacts?.filter( contact => 
        contact?.name?.toLowerCase().includes(filter.toLowerCase()))

    const removeContact = id => {
        dispatch(deleteContact(id))
    }

    return (
        <ul className={css.list_group}>
            {filterContacts.map(contact => (
                <ContactItem 
                    key={contact.id}
                    contact={contact}
                    removeContact={removeContact}
                />
            ))}
        </ul>
    )
}

export default ContactList











ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      }).isRequired
    ),
    // removeContact: PropTypes.func.isRequired,
};
