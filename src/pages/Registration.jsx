import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../redux/auth/operations';

export function Registration() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    dispatch(register({ name, email, password }))
      .unwrap()
      .then(() => navigate('/'))
      .catch(() => {
        alert('This data is not valid!');
      });
  };

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="name" />
        <input name="email" type="text" placeholder="email" />
        <input name="password" type="password" placeholder="password" />
        <button type="submit">SignUP</button>
      </form>
    </div>
  );
}
