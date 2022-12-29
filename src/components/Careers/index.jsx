import React from 'react';
import "../Careers/style.css"
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Careers = () => {
  return (
    <div>
        

    <div className='navbar'>
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
    
          
</div>





  
  );
};
  
export default Careers;