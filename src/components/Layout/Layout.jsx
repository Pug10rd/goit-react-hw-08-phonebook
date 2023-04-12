import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

const Layout = () => {
  return (
    <>
      <NavBar />
      <div>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default Layout;
