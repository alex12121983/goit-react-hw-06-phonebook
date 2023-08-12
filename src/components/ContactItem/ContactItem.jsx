import React from 'react'
import PropTypes from "prop-types";
import css from '../ContactItem/ContactItem.module.css'

const ContactItem = ({contact, removeContact}) => {
    
	return (
			<li 
            	key={contact.id} 
            	className={css.list_group_item}
            >
                {contact.name}: {contact.number}
                <button 
                    type="button" 
                    className={css.btn_danger}
                    onClick={() => removeContact(contact.id)}
                >
                    Delete
                </button>
            </li>
	)
}

export default ContactItem

ContactItem.propTypes = {
	contact: PropTypes.shape({
		  		name: PropTypes.string.isRequired,
		  		number: PropTypes.string.isRequired,
		  		id: PropTypes.string.isRequired,
		}).isRequired,
    removeContact: PropTypes.func.isRequired,
};
