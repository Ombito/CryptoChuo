import React, { useState } from 'react';
import './navmenu.css';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo1.jpeg';
import { FaShoppingCart, FaBars, FaTimes, FaUser } from  'react-icons/fa';

const NavbarMenu = ({user}) => {
    const [ active, setActive ] = useState(false);

    const toggle = ()=> {
        setActive(!active);
    }

    const closeMenu = () => {
        setActive(false);
      };

  return (
    <div>
        <h1>Navbar</h1>
        <h2>{user.full_name}</h2>
        <div className="navigation-container">
                    <button onClick={toggle} className='navbar-icons'>{active ? <FaTimes id="close"/> : <FaBars />}</button>
                    <div id="navlinks" className={active ? 'active' : '' } onClick={closeMenu}>
                        <div className="navbar-menu">
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
                                <div className="count">
                                    <FaShoppingCart color='red' id="cart-icon"/><span id="countss">{user.full_name}</span>
                                </div>
                            </Link>
                            {user ? (
                                <Link to="/login">
                                    <FaUser />{user.full_name}
                                </Link>
                            ) : (
                                <Link to="/login">
                                    <button id='signin-button' type='submit'>Sign in</button>
                                </Link>
                           )}
                            </div>
                        </div>
                        </div>
        
    </div>
  )
}

export default NavbarMenu;