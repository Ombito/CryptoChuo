import React from 'react';
import "../Home/style.css"
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import bitcoin from '../Assets/homepage.jpg'
import Navbar from '../Navbar/navbar.jsx';


const Home = () => {
  return (
    <div>
    <Navbar />
    <div className='content'>
      <div className='homepage'>
        <h2> Trusted platform <br/> for, <span className='crypto'>Crypto</span> Education.</h2>
        <p className='paragraph'> Start learning to buy and sell <br/> cryptocurrency with the best quality.</p>
        <Link to="/signup">
        <button className="enrollbutton" type='submit' >Enroll Now</button>
        </Link>
      </div>

      {/* <div>
        <img className='homecrypto' src={bitcoin} width="500" height="600" />
      </div> */}
    </div>

    <footer className='footer'>
    <div class="contactinfo">
        <p><i class="name">C<span className='ff'>rypto</span>C<span className='ff'>huo</span></i></p>
        <p><i class="email"></i> <span>info@cryptochuo.com</span></p>
        <p><i class="phone"></i> <span>(+254)721-857-213</span></p>        
        <p><i class="address"></i> <span>Nairobi, Kenya</span></p>
        <small>&copy; 2023 Copyright</small>
      </div>

      <div class="faqsupport">
        
          <a href="#"  className='faq'>FAQ</a>
          <a href="#" className='support'>Support Us</a>
        
      </div>

      <div class="socialmedia">
        
            <a href="https://www.instagram.com/ashly_ochwada/" target="blank" className='twitter'>Twitter</a>
          
            <a href="https://t.me/cryptochuo" target="blank" className='telegram'>Telegram</a>
          
            <a href="https://discord.gg/kUapzzg7" target="blank" className='discord'>Discord</a>
          
        
      </div>


    
    </footer>
          
      </div>
          

      
      




  
  );
};
  
export default Home;