import React, { useState } from 'react';
import './navmenu.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../Assets/logo11.png';
import { FaShoppingCart, FaBars, FaTimes, FaUser } from  'react-icons/fa';
import { useSnackbar } from 'notistack';

const NavbarMenu = ({ user, setUser, cart, darkMode, toggleDarkMode }) => {
    const [ active, setActive ] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const handleNavigate = (route) => {
        navigate(route);
        setIsModalOpen(false);
    };

    const handleLogout = async () => {
        try {
          const confirmed = window.confirm("Are you sure you want to logout?");
          if (!confirmed) {
            return;
          }
          localStorage.removeItem('token');
          const response = await fetch('http://127.0.0.1:5555/logout_user', {
            method: 'DELETE',
          });
          if (response.ok) {
            localStorage.removeItem('token');
            setUser(null);
            enqueueSnackbar('Logout successful!', { variant: 'success' });
            navigate('/');
            return response.json();
          } else {
            console.error('Failed to logout:', response.status);
            enqueueSnackbar('Failed to logout', { variant: 'error' });
          }
        } catch (error) {
          console.error('Error during logout:', error.message);
          enqueueSnackbar('An error occurred while logging out', { variant: 'error' });
        }
    };

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
      
    const getInitials = (fullName) => {
        const names = fullName.split(' ');
        const initials = names.map(name => name.charAt(0)).join('').substring(0, 2);
        return initials.toUpperCase();
    };

    const handleModalToggle = () => {
        setIsModalOpen(!isModalOpen);
    };

    const UserModal = () => {
        if (!isModalOpen) return null;
    
        const getInitials = (fullName) => {
            const names = fullName.split(' ');
            const initials = names.map(name => name.charAt(0)).join('').substring(0, 2);
            return initials.toUpperCase();
        };
    
        return (
            <div className="modal-overlay" onClick={handleModalToggle}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <div className='modal-initials-div'>
                        <p className='modal-initials'>{getInitials(user.full_name)}</p>
                        <h6 className="user-email">{user.email}</h6>
                    </div>
                    <ul className="modal-menu">
                        <li onClick={() => handleNavigate('/profile')}><ion-icon id='modal-icons' name="person-outline"></ion-icon> Profile</li>
                        <li onClick={() => handleNavigate('/courses')}><ion-icon id='modal-icons1' name="book-outline"></ion-icon> Courses</li>
                        <li onClick={() => handleNavigate('/orders')}><ion-icon id='modal-icons2' name="create-outline"></ion-icon> Orders</li>
                        <li onClick={handleLogout}><ion-icon id='modal-icons3' name="log-out-outline"></ion-icon> Logout</li>
                    </ul>
                </div>
            </div>
        );
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
                    <div class="lightmode-container">
                        <label class="toggle" for="switch">
                            <input id="switch" class="input" type="checkbox" name="dark-mode" checked={darkMode} onChange={toggleDarkMode}/>
                            <div class="icon icon--moon">
                                <svg height="25" width="25" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path clip-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" fill-rule="evenodd"></path>
                                </svg>
                            </div>
                            <div class="icon icon--sun">
                                <svg height="25" width="25" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
                                </svg>
                            </div>
                        </label>
                    </div>
                    <Link>
                        <ion-icon id="notification-icon" name="notifications-outline"></ion-icon>
                    </Link>  
                    <Link to="/cart">
                        <div className="count">
                            <ion-icon name="cart-outline" id="cart-icon"></ion-icon>
                            {cart.length > 0 && (<span id="count-number">{cart.length}</span>)}
                        </div>
                    </Link>
                    {user ? (
                        <div>
                            <div className='user-name-container' onClick={handleModalToggle}>
                                <div className='initials-circle'>
                                    <p>{getInitials(user.full_name)}</p>
                                </div>
                            </div>
                            <UserModal />
                        </div>  
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