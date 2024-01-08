import "../Footer/style.css"
import { NavLink } from 'react-router-dom';
import { FaCopyright } from  'react-icons/fa';
import logo from '../Assets/logo1.jpeg';
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
        <div class="contactinfo">
          <h5>ACADEMY</h5>
          <NavLink to='/courses'>Courses</NavLink>
          <NavLink to='/courses/blockchain'>Web3 Masterclass</NavLink>
          <NavLink to='/shop'>Shop</NavLink>
          <NavLink to='/markets'>Markets</NavLink>
          <NavLink to='/contact'>Contact Us</NavLink>
        </div>
        <div class="contactinfo">
          <h5>RESOURCES</h5>
          <NavLink to='/events'>Events</NavLink>
          <NavLink to='/news'>News</NavLink>
          <NavLink to='/careers'>Careers</NavLink>
          <NavLink to='/sponsorship'>Sponsorship</NavLink>
          <NavLink to='/faqs'>FAQs</NavLink>
          <NavLink to='/privacypolicy'>Privacy policy</NavLink>
        </div>
        <div class="contactinfo">
          <h5>Company</h5>
          <NavLink to='/events'>About Us</NavLink>
          <NavLink to='/careers'>Blog</NavLink>
          <NavLink to='/partnership'>Become a Partner</NavLink>
          <NavLink to='/community'>Join Our Community</NavLink>
          <NavLink to='/termsofservice'>Terms of Service</NavLink>
        </div>
      </div>
      <div className="footer-line"></div>
      <div id="copyright"><FaCopyright />CryptoChuo 2024. All Rights Reserved.</div>
    </footer>
    )
}
export default Footer;