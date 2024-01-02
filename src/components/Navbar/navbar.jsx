import React, { useState }  from 'react';
import "../Navbar/navbar.css";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo1.jpeg';
import { FaShoppingCart, FaBars, FaTimes, FaUser } from  'react-icons/fa';

const Navbar = ({ user, size }) => {
    console.log('Navbar size:', size);
    const [ active, setActive ] = useState(false);
    
    const toggle = ()=> {
        setActive(!active);
    }

    const closeMenu = () => {
        setActive(false);
      };
    console.log('Navbar user:', user)


    return (
        <div className='navbar'>
            <div className="logo-container">
                <Link class="container" to="/"><img className='logo' src={logo} alt="Bitcoin Logo" /></Link>
            </div>
            {user ? (
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
                                <FaShoppingCart id="cart-icon"/>
                                <span>{size}</span>
                            </Link>
                            <Link to="/login">
                                <FaUser />
                            </Link>
                        </div>
                    </div>         
                </div>
            ) : (
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
                            <FaShoppingCart id="cart-icon"/>
                            <span>{size}</span>
                        </Link>
                        <Link to="/login">
                            <button id='button' type='submit'>Sign in</button>
                        </Link>
                    </div>
                </div>         
            </div>
            )}
        </div>
    );
};

export default Navbar;
