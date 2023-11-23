import React from 'react';
import "../Home/style.css"
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import bitcoin from '../Assets/homepage.jpg'
import Navbar from '../Navbar/navbar.jsx';
import Footer from '../Footer/index.jsx';


const Home = () => {
  return (
    <div>
    <Navbar />
    <div className='content'>
      <div className='homepage'>
        <h2> Trusted platform <br/> for, <span className='crypto'>Crypto</span> Education.</h2>
        <p className='paragraph'> Start learning to buy and sell <br/> cryptocurrency with the best quality.</p>
        <Link to="/login">
        <button className="enrollbutton" type='submit' >Enroll Now</button>
        </Link>
      </div>

      <div>
        <img className='homecrypto' src={bitcoin} width="500" height="600" />
      </div>
    </div>
    <Footer />          
    </div>
          

      
      




  
  );
};
  
export default Home;