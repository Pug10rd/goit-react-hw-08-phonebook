import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Layout';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../redux/auth/operations';
import { PrivateRoute } from '../hooks/PrivateRoute';
import { PublicRoute } from '../hooks/PublicRoute';

import { Home } from '../pages/Home';
import { Registration } from '../pages/Registration';
import { Login } from '../pages/Login';
import { Contacts } from '../pages/Contacts';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Registration />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
