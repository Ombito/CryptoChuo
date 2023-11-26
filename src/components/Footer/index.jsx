import "../Footer/style.css"
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
    <footer className='footer'>
      <div class="contactinfo">
        <NavLink to='/courses'>Courses</NavLink>
        <NavLink to='/about'>About Us</NavLink>
        <NavLink to='/shop'>Shop</NavLink>
        <NavLink to='/markets'>Markets</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </div>
      <div class="contactinfo">
        <NavLink to='/events'>Events</NavLink>
        <NavLink to='/careers'>Careers</NavLink>
        <NavLink to='/sponsorship'>Sponsorship</NavLink>
        <NavLink to='/faqs'>FAQs</NavLink>
        <NavLink to='/privacypolicy'>Privacy policy</NavLink>
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