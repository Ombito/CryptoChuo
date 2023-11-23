import React from 'react';
import "../Navbar/navbar.css"
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import bitcoin from '../Images/homepage.jpg'

const Navbar = () => {
    return (
    <div className='navbar'>
        <div>
            <img className='logo' src={bitcoin} width="500" height="600" />
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
                <NavLink to='/careers' id='careers'>
                    Careers
                </NavLink>
                <NavLink to='/shop' id='shop'>
                    Shop
                </NavLink>
            </div>
            <div >
                <Link to="/login">
                    <button id='button' type='submit'>Sign In</button>
                </Link>
            </div>
        
        </div>
    </div>
    )
}
export default Navbar;