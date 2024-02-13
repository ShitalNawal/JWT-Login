// ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext/AuhContext';

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const { isLoggedIn } = useAuth();

  return (
    <Route
      {...rest}
      element={isLoggedIn ? <Element /> : <Navigate to="/signIn" replace />}
    />
  );
};

export default ProtectedRoute;
