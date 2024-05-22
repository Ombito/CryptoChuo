import React, { useState } from 'react';
import './navmenu.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../Assets/logo-.png';
import { FaShoppingCart, FaBars, FaTimes, FaUser } from  'react-icons/fa';
import { useSnackbar } from 'notistack';

const NavbarMenu = ({user, cart }) => {
    const [ active, setActive ] = useState(false);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const toggle = ()=> {
        setActive(!active);
    }

    const closeMenu = () => {
        setActive(false);
    };

    const handleProtectedNavClick = (e, path) => {
        if (!user) {
          e.preventDefault();
          navigate('/login');
          enqueueSnackbar('Signin to view courses', { variant: 'warning' });
        } else {
          navigate(path);
        }
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
                    <NavLink to='/' id='home'>Home</NavLink>
                    <NavLink to='/about' id='about'>About Us</NavLink>
                    <NavLink to='/courses' id='courses' onClick={(e) => handleProtectedNavClick(e, '/courses')}>Courses</NavLink>
                    <NavLink to='/markets' id='markets'>Markets</NavLink>
                    <NavLink to='/shop' id='shop'>Shop</NavLink>
                </div>
                <div className="auth-button">
                    <Link to="/cart">
                        <div className="count">
                            <ion-icon name="cart-outline" id="cart-icon"></ion-icon>
                            {cart.length > 0 && (<span id="count-number">{cart.length}</span>)}
                        </div>
                    </Link>
                    {user ? (
                        <Link to="/login">
                            <div className='user-name-container'>
                                <ion-icon name="person-circle-outline" id="user-icon"></ion-icon>
                                <h4>{user.username}</h4>
                            </div>
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