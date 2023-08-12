import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { createContact } from 'store/contacts/contactsSlice';
import { getContacts } from 'store/contacts/selectors';
import { useState } from 'react';
import css from './Phonebook.module.css'

const Phonebook = () => {
    const contacts = useSelector(getContacts)
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const handleChange = (evt) => {
        switch (evt.target.name) {
            case 'name':
                setName( evt.target.value )
                break;
            case 'number':
                setNumber( evt.target.value )
                break;
            default:
                break;
        }
    }
    const handleSubmit = evt => {
        evt.preventDefault()

        const newContact = {
            id: nanoid(),
            name: evt.target.elements.name.value,
            number: evt.target.elements.number.value,
        }
        const existContact = contacts.find((contact) => 
        contact.name.toLowerCase() === newContact.name.toLowerCase()) 
				
        if (existContact){
				return alert(`${name} is already in contacts.`);
			}
        dispatch(createContact(newContact))
        reset()
    }
    const reset = () => {
        setName('')
        setNumber('')
    }
    return (
        <form className={css.phonebook} onSubmit={handleSubmit}>
            <div className={css.phonebook_input}>
                <label 
                    htmlFor="inputName" 
                    className="form-label"
                >
                    Name
                </label>
                <input 
                    name="name"
                    type="text" 
                    className={css.form_control} 
                    // id="inputName" 
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    onChange={handleChange}
                    value={name}
                />
            </div>
            <div className={css.phonebook_input}>
                <label 
                    htmlFor="inputNumber" 
                    className={css.form_label}
                >
                    Number
                </label>
                <input 
                    name="number"
                    type="tel" 
                    className={css.form_control} 
                    // id="inputNumber" 
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={handleChange}
                    value={number}
                />
            </div>
            <button 
                type="submit" 
                className={css.btn_primary}
                disabled={ !name || !number }
            >
                Add contact
            </button>
        </form>
    )
}

export default Phonebook