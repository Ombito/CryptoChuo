import React from 'react';
import "../Navbar/navbar.css";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import bitcoin from '../Assets/homepage.jpg';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo-container">
                <img className='logo' src={bitcoin} alt="Bitcoin Logo" />
            </div>
            <div className="navigation-container">
                <div className="navlinks">
                    <NavLink to='/' id='home'>
                        Home
                    </NavLink>
                    <NavLink to='/about' id='about'>
                        About Us
                    </NavLink>
                    <NavLink to='/courses' id='courses'>
                        Courses
                    </NavLink>
                    <NavLink to='/markets' id='markets'>
                        Markets
                    </NavLink>
                    <NavLink to='/shop' id='shop'>
                        Shop
                    </NavLink>
                </div>
                <div className="auth-button">
                    <Link to="/login">
                        <button id='button' type='submit'>Sign In</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
