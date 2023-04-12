import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logOut } from '../../redux/auth/operations';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedin = useSelector(selectIsLoggedIn);
  const name = useSelector(state => state.auth.user.name);

  return (
    <header>
      <div>
        <NavLink to="/">Home</NavLink>
        {isLoggedin && <NavLink to="/contacts">Phonebook</NavLink>}
      </div>

      {!isLoggedin ? (
        <div>
          <NavLink to="/login">log In</NavLink>
          <NavLink to="/register">Register</NavLink>
        </div>
      ) : (
        <div>
          <p>Welcome, {name}</p>
          <button
            onClick={() => {
              dispatch(logOut());
              navigate('/');
            }}
          >
            Log Out
          </button>
        </div>
      )}
    </header>
  );
};

export default NavBar;
