import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from '../redux/auth/selectors';

export const Home = () => {
  const isLoggedin = useSelector(selectIsLoggedIn);
  return (
    <div>
      <h1 className="">Welcome to our homepage!</h1>
      {!isLoggedin ? (
        <div>
          <p>Thank you for visiting our website.</p>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <button type="button">Please Log In</button>
          </Link>
        </div>
      ) : (
        <div>
          <p>Thank you for authorization!</p>
          <Link to="/contacts" style={{ textDecoration: 'none' }}>
            <button type="button">Your Phonebook</button>
          </Link>
        </div>
      )}
    </div>
  );
};
