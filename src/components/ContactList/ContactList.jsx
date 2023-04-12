import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { applayFilter } from '../../redux/contacts/selectors';
// import { List, Button, Item, Text } from './ContactListStyled';

const ContactList = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector(applayFilter);

  return (
    <div>
      <ul>
        {contactsList.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
