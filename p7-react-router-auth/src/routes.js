import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { isAuthenticated } from './auth';

const PrivateRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to='/login' />;
};

const MyRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<PrivateRoute />}>
        <Route exact path='/' element={<h1>Com acesso</h1>} />
      </Route>
      <Route exact path='/login' element={<h1>Sem acesso</h1>} />
    </Routes>
  </BrowserRouter>
);

export default MyRoutes;
