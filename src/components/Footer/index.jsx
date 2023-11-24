import "../Footer/style.css"
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
    <footer className='footer'>
      <div class="contactinfo">
        <NavLink to='/shop'>Courses</NavLink>
        <NavLink to='/shop'>About Us</NavLink>
        <NavLink to='/shop'>Shop</NavLink>
        <NavLink to='/shop'>Markets</NavLink>
        <NavLink to='/shop'>Contact</NavLink>
      </div>
      <div class="contactinfo">
        <NavLink to='/shop'>Events</NavLink>
        <NavLink to='/shop'>Careers</NavLink>
        <NavLink to='/shop'>Sponsorship</NavLink>
        <NavLink to='/shop'>FAQs</NavLink>
        <NavLink to='/shop'>Privacy policy</NavLink>
      </div>
      <div class="footer-contact">
        <p class="" >info@cryptochuo.com</p>
        <p class="" >+254 721 857 213</p>
        <p class="s" >Kilimani, Nairobi</p>        
        <div>
          <a href="https://www.ins" target="blank" className='twitter'>Twitter</a>
            
            <a href="https://t.me/cryptochuo" target="blank" className='telegram'>Telegram</a>
              
            <a href="https://discord.gg/kUapzzg7" target="blank" className='discord'>Discord</a>
              
        </div>
      </div>
    </footer>
    )
}
export default Footer;