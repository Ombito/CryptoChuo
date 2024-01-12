import React, { useState }  from 'react';
import "../Navbar/style.css";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo1.jpeg';
import { FaShoppingCart, FaBars, FaTimes, FaUser } from  'react-icons/fa';

const Navbar = ({ user, size }) => {
    const [ active, setActive ] = useState(false);
    
    console.log('Navbar size:', size)
    console.log('Navbar user:', user)

    const toggle = ()=> {
        setActive(!active);
    }

    const closeMenu = () => {
        setActive(false);
      };
    


    return (
        <div className='navbar'>
            <div className="logo-container">
                <Link class="container" to="/"><img className='logo' src={logo} alt="Bitcoin Logo" /></Link>
            </div>
          
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
                        {user ? (
                        <div className="auth-button">
                            <Link to="/cart">
                                <div className="count">
                                    <FaShoppingCart id="cart-icon"/><span id="countss">{size}</span>
                                </div>
                            </Link>
                            <Link to="/login">
                                <FaUser />
                            </Link>
                        </div>
                        ) : (
                            <div className="auth-button">
                                <Link to="/cart">
                                <div className="count">
                                    <FaShoppingCart id="cart-icon"/><span className="counts">{size}</span>
                                </div>
                                </Link>
                                <Link to="/login">
                                    <button id='signin-button' type='submit'>Sign in</button>
                                </Link>
                             </div>
                           )}
                    </div>         
                </div>
            
                {/* <div className="navigation-container">
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
                    
                </div>         
            </div> */}
         
        </div>
    );
};

export default Navbar;
