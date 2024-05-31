import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./style.css";
import { useSnackbar } from 'notistack';

const LogIn = ({setUser}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Logging in', email);
  
    try {
      const response = await fetch('http://127.0.0.1:5555/login_user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        enqueueSnackbar('Login successful!', { variant: 'success' });
        navigate('/courses');
      } else {
        console.log("Login failed!")
        enqueueSnackbar('Wrong email address or password', { variant: 'error' });
      }
    } catch (error) {
      console.error('Login failed: ', error);
      enqueueSnackbar('An error occurred while logging in', { variant: 'error' });
    }
  };

  return (
    <div id='signin'>
      <div id="login-form-container">
        <h2>Login</h2>
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="checkbox-div">
              <div id="checkbox-container">
                <input type="checkbox" id="rememberMe" name="rememberMe" />
                <label id='remember-me' htmlFor="rememberMe" >Remember me</label>
              </div>
                <p className="account">
                  <Link to="/forgot-password">Forgot password?</Link>
                </p>
              </div>
            <button id='login-btn' type="submit" >Login</button>
            {error && <p>{error}</p>}
          </form>
          <p className="account">Don't have an account? <Link to="/signup"> Sign up</Link></p>
        </div>
      </div>
    </div>
  );
};
export default LogIn;