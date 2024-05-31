import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import "../Signup/style.css";


const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      setError('Passwords do not match');
  } else {
      try {
        const response = await fetch('http://127.0.0.1:5555/signup_user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ full_name: fullName, email, password }),
        });
    
        if (response.ok) {
          enqueueSnackbar('Sign up successful!', { variant: 'success' });
          navigate('/login');
        } else {
          console.log("Signup failed!")
          enqueueSnackbar('Sign up failed', { variant: 'error' });
        }
      } catch (error) {
        setError('Error: ' + error.message);
        console.error('Error during signup:', error);
        enqueueSnackbar('Error during signup', { variant: 'error' });
      }
    }
  };

  return (
    <div id='signup'>
      <div className='signup-form'>
        <h2 className='signup'>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
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
            placeholder="Enter a unique password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Re-enter your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p id="consent">
            By creating an account, you agree to our <span>Terms & Conditions</span>
          </p>
          <button className='signup-button' type="submit">Signup</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
        <p className="account">
          Do you have an account? <Link to="/login"> Login</Link>
        </p>
      </div>
    </div>
  );
}
export default Signup;
  
  