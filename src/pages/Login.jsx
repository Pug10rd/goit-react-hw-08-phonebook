import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/operations';

export function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    dispatch(logIn({ email, password }))
      .unwrap()
      .then(() => navigate('/contacts'))
      .catch(() => {
        alert('Please enter valid data!');
      });

    form.reset();
  };

  return (
    <div>
      <h1>login</h1>
      <form onSubmit={handleSubmit}>
        <input name="email" placeholder="email" type="text" />
        <input placeholder="password" name="password" type="password" />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
