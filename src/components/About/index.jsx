import React from 'react';
import "../About/style.css"
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import team1 from "../Images/team1.jpg"
import team2 from "../Assets/team2.png"
import Navbar from "../Navbar/navbar.jsx";
import Footer from "../Footer/index.jsx";


const About = () => {
  return (
    <div>
        <Navbar /> 
        <div className='aboutus'>
          <div id="about-banner" class="container">
            <p className='about'>CryptoChuo training provides a strong foundation for executives to understand cryptocurrency <br/>and blockchain. Participants learn the essentials behind blockchain and distributed ledger 
            <br/>technology(DLT), how cryptocurrency transactions work, Virtual Asset Service Provider(VASP) <br/>typologies, industry needs, and the role blockchain analytics plays in the crypto ecosystem.
            <br/>CryptoChuo graduates make more informed decisions around cryptocurrency, whether it brings 
            <br/>drafting regulations, creating compliance policies, and/or overseeing cryptocurrency-enabled <br/>financial crime investigations.</p>
          </div>
          <div id="our-story">
            <img src={team2} alt="" height="400" width="400"/>
            <div>
              <h2>Our Story</h2>
              <h1>We accelerate Your growth</h1>
                <p>Founded in 2019, 101 Blockchains is the world’s leading research-based platform for Blockchain and Web3 Practitioners, with an existing community of over 60,000 professionals.

                We offer world-class training courses and industry-recognized certification programs that help professionals upgrade their skills and reach the next level of success.

                Our teams of researchers, instructors, and subject matter experts are real-world industry professionals with immense knowledge and significant experience.
              </p>
            </div>
          </div>
          <div>
            <img src={team2} width="300" height="300" alt="" />
            <div>
              <h3>Why CryptoChuo</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, mollis ultricies aliquet aptent augue blandit, urna diam sociosqu faucibus consequat. Malesuada est suspendisse fusce turpis montes quam eget sollicitudin</p>
              <div>
                <div>
                  <p>Award winning education</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                </div>
                <div>
                  <p>Dynamic innovative learning</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                </div>
                <div>
                  <p>Career growth</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                </div>
                <div>
                  <p>Access to CryptoChuos Alumni network</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4>OUR SUCCESS</h4>
            <h2>What Our Students Say About Us</h2>
          </div>
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
    <Footer />
    
          
</div>
  
  );
};
  
export default About;