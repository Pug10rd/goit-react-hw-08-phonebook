import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contactsSlice';
import { selectFilterValue } from '../../redux/contacts/selectors';
// import { Input } from './FilterStyled';

const Filter = () => {
  const filter = useSelector(selectFilterValue);

  const dispatch = useDispatch();

  return (
    <label>
      <input
        type="text"
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value))}
        placeholder="Find contact..."
      />
    </label>
  );
};

export default Filter;
