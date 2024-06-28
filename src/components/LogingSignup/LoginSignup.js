import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import './loginsignup.css';
import { baseURL } from '../../utils/constant';
import { Link, useHistory } from 'react-router-dom';



const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // const history = useHistory();

  useEffect(() => {
    // Check if a token exists in local storage when the component mounts
    const token = localStorage.getItem('token');
    if (token) {
      // If a token exists, perform authentication check
      authenticateWithToken(token);
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const authenticateWithToken = async (token) => {
    try {
      // Send a request to the server to authenticate using the token
      const response = await axios.post(`${baseURL}/authenticate`, { token });
      console.log(response.data);
      if (response.data.success) {
        
        // If authentication is successful, redirect to dashboard
        // history.push('/dashboard');
        return window.location = "/upload"
      } else {
        // If authentication fails, remove the token from local storage
        localStorage.removeItem('token');
      }
    } catch (error) {
      console.log("Error occurred during authentication:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseURL}/login`, { email, password });
      console.log(response.data);
      if (response.data.success) {
        const token = response.data.token;
        localStorage.setItem('token', token);
       return window.location = "/dashboard"
    
      } else {
        setError("Either your email or password is incorrect");
        <Link to={'/login'} ></Link>
      }
    } catch (error) {
      console.log("Your connection is not successful", error);
      setError("Your connection is not successful");
    }
  };

  return (
    <form onSubmit={handleSubmit} className='login-signup'>
      <div className='login-signup-container'>
        <h1>Login</h1>
        <div className='login-signup-fields'>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='Email address'
          />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder='Password'
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
        <p className='login-signup-login'>You don't have an account? <Link to="/">Signup Here</Link></p>
        <div className='login-signup-agree'>
          <input type='checkbox' name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;






