import "../Footer/style.css"
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
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
        <a href="https://www.ins" target="blank" className='twitter'>Twitter</a>
          
        <a href="https://t.me/cryptochuo" target="blank" className='telegram'>Telegram</a>
          
        <a href="https://discord.gg/kUapzzg7" target="blank" className='discord'>Discord</a>
          
        
      </div>

    </footer>
    )
}
export default Footer;