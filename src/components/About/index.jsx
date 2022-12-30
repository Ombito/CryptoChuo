import React from 'react';
import "../About/style.css"
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import team1 from "../Images/team1.jpg"
import team2 from "../Images/team2.png"
// import team3 from "../Images/team3.jpg"


const About = () => {
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

    <div className='aboutus'>
    <h2 className='au'>About Us</h2>
      <p className='about'>CryptoChuo training provides a strong foundation for executives to understand cryptocurrency <br/>and blockchain. Participants learn the essentials behind blockchain and distributed ledger 
      <br/>technology(DLT), how cryptocurrency transactions work, Virtual Asset Service Provider(VASP) <br/>typologies, industry needs, and the role blockchain analytics plays in the crypto ecosystem.
      <br/>CryptoChuo graduates make more informed decisions around cryptocurrency, whether it brings 
      <br/>drafting regulations, creating compliance policies, and/or overseeing cryptocurrency-enabled <br/>financial crime investigations.</p>

      <div className='ourteam'>
      <h2 className='header'>Our Team</h2>
      <div className='profile'>

        <div className='team1'>
        <img id='team1' src={team2} width="230" height="230" />
        <button id="ceo" type='submit' >Alvin Ombito<br/> CEO</button>

        </div>

        <div className='team2'>
        <img id='team2' src={team2} width="230" height="230" />
        <button id="ceo" type='submit' >Alvin Ombito<br/> CTO</button>

        </div>

        <div className='team3'>
        <img id='team3' src={team2} width="230" height="230"  />
        <button id="ceo" type='submit' >Alvin Ombito<br/> CIO</button>


        </div>

      </div>

      </div>
    </div>
    
          
</div>
  
  );
};
  
export default About;