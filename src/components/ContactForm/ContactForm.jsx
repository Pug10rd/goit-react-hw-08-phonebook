import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/contacts/operations';
import { selectItems } from '../../redux/contacts/selectors';
// import { Form, Button, Input, Label, WrapBtn } from './ContactFormStyled';

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectItems);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const user = {
    name,
    number,
  };

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleCheck = data => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is alredy in contact`);
    } else {
      dispatch(addContact(data));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleCheck(user);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={nanoid()}>
        Name
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleChange}
          id={nanoid()}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor={nanoid()}>
        Number
        <input
          type="tel"
          name="number"
          placeholder="Number"
          value={number}
          onChange={handleChange}
          id={nanoid()}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <div>
        <button type="submit">Add contact</button>
      </div>
    </form>
  );
}

export default ContactForm;
