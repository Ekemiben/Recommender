// PrivateRoute.js

import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ element, ...rest }) => {
    const { authenticated } = useAuth();

    return (
        <Route
            {...rest}
            element={authenticated ? element : <Navigate to="/login" replace />}
        />
    );
};

export default PrivateRoute;
