// Login.js

import React from 'react';
import { useAuth } from './AuthContext';

const Login = () => {
    const { login } = useAuth();

    const handleLogin = () => {
        // Perform login logic (e.g., validate credentials)
        login(); // This sets authenticated to true
        // Redirect user to the previous page or another route
    };

    return (
        <div>
            <h2>Login Page</h2>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
