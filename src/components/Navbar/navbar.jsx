import React, { useState }  from 'react';
import "../Navbar/navbar.css";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import bitcoin from '../Assets/homepage.jpg';
import { FaShoppingCart, FaBars, FaTimes } from  'react-icons/fa';

const Navbar = () => {
    const [ active, setActive ] = useState(false);
    const toggle = ()=> {
        setActive(!active);
    }

    const closeMenu = () => {
        setActive(false);
      };

    return (
        <div className='navbar'>
            <div className="logo-container">
                <Link class="container" to="/"><img className='logo' src={bitcoin} alt="Bitcoin Logo" /></Link>
            </div>
            <div className="navigation-container">
                <button onClick={toggle} className='navbar-icons'>{active ? <FaTimes id="close"/> : <FaBars />}</button>
                <div id="navlinks" className={active ? 'active' : '' } onClick={closeMenu}>
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
                    <Link to="/cart">
                        <FaShoppingCart id="cart-icon"/>
                    </Link>
                    <Link to="/login">
                        <button id='button' type='submit'>Sign in</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
