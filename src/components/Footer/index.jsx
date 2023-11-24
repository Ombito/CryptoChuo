import "../Footer/style.css"
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
    <footer className='footer'>
      <div class="contactinfo">
        <p><i class="name">Courses</i></p>
        <p><i class="email"></i> <span>About Us</span></p>
        <p><i class="phone"></i>Shop</p>        
        <p><i class="address"></i> <span>Markets</span></p>
        <p><i class="address"></i>Contact</p>
      </div>
      <div class="contactinfo">
        <p><i class="name">Events</i></p>
        <p><i class="email"></i> <span>Careers</span></p>
        <p><i class="phone"></i>Sponsorship</p>        
        <p><i class="address"></i> <span>FAQs</span></p>
        <p><i class="address"></i>Privacy policy</p>
      </div>
      <div class="contactinfo">
        <p><i class="name">info@cryptochuo.com</i></p>
        <p><i class="email"></i> <span>+254 721 857 213</span></p>
        <p><i class="phone"></i>Kilimani, Nairobi</p>        
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