import "../Footer/style.css"
import { NavLink } from 'react-router-dom';
import { FaCopyright } from  'react-icons/fa';
import logo from '../Assets/logo11.png';
import { FaTwitter, FaDiscord, FaTelegram, FaFacebook, FaInstagram } from  'react-icons/fa';


const Footer = () => {
    return (
    <footer className='footer'>
      <div className="footer-container">
        <div className="contactinfo">
          <img id="logo-footer" src={logo} alt="Logo" />
          <p>Choose us for a dynamic learning experience.</p>
          <h5>Community</h5>
          <div className='social-links'>
            <a href="https://www.ins" target="blank" className='twitter'><FaTwitter /></a> 
            <a href="https://t.me/cryptochuo" target="blank" className='telegram'><FaTelegram /></a>  
            <a href="https://discord.gg/kUapzzg7" target="blank" className='discord'><FaDiscord /></a>   
            <a href="https://t.me/cryptochuo" target="blank" className='telegram'><FaFacebook /></a>
            <a href="https://discord.gg/kUapzzg7" target="blank" className='discord'><FaInstagram /></a> 
          </div>
        </div>
        <div className="contactinfo">
          <h5>ACADEMY</h5>
          <NavLink to='/courses'>Courses</NavLink>
          <NavLink to='/courses/Web3'>Web3 Masterclass</NavLink>
          <NavLink to='/shop'>Shop</NavLink>
          <NavLink to='/markets'>Markets</NavLink>
          <NavLink to='/login'>Login</NavLink>
          
          
        </div>
        <div className="contactinfo">
          <h5>RESOURCES</h5>
          <NavLink to='/cart'>Shopping Cart</NavLink>
          <NavLink to='/orders'>Orders</NavLink>
          <NavLink to='/blogs'>Blog</NavLink>
          <NavLink to='/faqs'>FAQs</NavLink>
          <NavLink to='/privacy-policy'>Privacy policy</NavLink>
        </div>
        <div class="contactinfo">
          <h5>COMPANY</h5>
          <NavLink to='/about'>About Us</NavLink>
          <NavLink to='/careers'>Careers</NavLink>
          <NavLink to='/partnership'>Become a Partner</NavLink>
          <NavLink to='/community'>Join Our Community</NavLink>
          <NavLink to='/contact'>Contact Us</NavLink>
        </div>
      </div>
      <div className="footer-line"></div>
      <div id="copyright"><FaCopyright />CryptoChuo 2024. All Rights Reserved.</div>
    </footer>
    )
}
export default Footer;