import React from 'react';
import "./style.css"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirmPassword] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className='form'>
            <h2 className='signup'>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <div className="full-name">
                        <label>Full name</label>
                        <input
                            className="input-field"
                            type="text"
                            placeholder="Enter Full Name"
                            value={first_name}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="email">
                        <label>Email address</label>
                        <input
                            className="input-field"
                            type="text"
                            placeholder="Enter email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="password">
                        <label>Password</label>
                        <input
                            className="input-field"
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <p id="consent">By creating an account, you agree to our <span>Terms & Conditions</span></p>
                <Link to="/courses">
                    <button className="signup-button" type='submit'>Sign Up</button>
                </Link>
                <div className='message'>{message ? <p>{message}</p> : null}</div>
            </form>
            <p className="account">
                Do you have an account? <Link to="/login">Login</Link>
            </p>
        </div>
    );
};

export default Signup;
