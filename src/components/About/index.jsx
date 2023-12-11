import React from 'react';
import "../About/style.css"
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import team1 from "../Images/team1.jpg"
import team2 from "../Assets/team2.png"
import Navbar from "../Navbar/navbar.jsx";
import Footer from "../Footer/index.jsx";
import banner from "../Assets/school.png";
import ourstory from "../Assets/our-story.png";
import binance from "../Assets/binance.png";
import bybit from "../Assets/bybit.png";
import avalanche from "../Assets/avalanche.png";
import polygon from "../Assets/polygon.png";
import opensea from "../Assets/opensea.png";
import ledger from "../Assets/ledger.png";
import gemini from "../Assets/gemini.png";
import { FaUserFriends, FaGraduationCap, FaBookOpen, FaCertificate } from  'react-icons/fa';


const About = () => {
  return (
    <div>
        <Navbar /> 
        <div className='aboutus'>
          <div id="about-banner" class="container">
            <div> 
              <p className='about'>CryptoChuo training provides a strong foundation for executives to understand cryptocurrency and blockchain. Participants learn the essentials behind blockchain and distributed ledger 
              technology(DLT), how cryptocurrency transactions work, Virtual Asset Service Provider(VASP) typologies, industry needs, and the role blockchain analytics plays in the crypto ecosystem.
              CryptoChuo graduates make more informed decisions around cryptocurrency, whether it brings 
              drafting regulations, creating compliance policies, and/or overseeing cryptocurrency-enabled financial crime investigations.
              </p>
            </div>
            <div>
              <img src={banner} alt="" />
            </div>
          </div>
          <div id="our-story" class="container">
            <img src={ourstory} alt="" height="400" width="400"/>
            <div>
              <h2>Our Story</h2>
              <h1>We accelerate Your growth</h1>
                <p>Founded in 2019, 101 Blockchains is the world’s leading research-based platform for Blockchain and Web3 Practitioners, with an existing community of over 60,000 professionals.

                We offer world-class training courses and industry-recognized certification programs that help professionals upgrade their skills and reach the next level of success.

                Our teams of researchers, instructors, and subject matter experts are real-world industry professionals with immense knowledge and significant experience.
              </p>
            </div>
          </div>
          <div id="partner-container">
            <div class="container" id="partners">
              <div className="hero-partners">
                <h4>Our Partners</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, mollis ultricies aliquet aptent augue blandit, urna diam sociosqu  est suspendisse fusce turpis montes quam eget sollicitudin</p>
              </div>
              <div id="logo-div">
                <img src={binance} alt="" height="150" width="200" />
                <img src={opensea} alt="" height="100" width="150" />
                <img src={avalanche} alt="" height="90" width="100" />
                <img src={polygon} alt="" height="90" width="100" />
                <img src={ledger} alt="" height="70" width="160" />
                <img src={gemini} alt="" height="70" width="150" />
              </div>
            </div>
          </div>
          <div >
            <div class="container" id="why-us">
              <h3>Why CryptoChuo</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, mollis ultricies aliquet aptent augue blandit, urna diam sociosqu faucibus consequat. Malesuada est suspendisse fusce turpis montes quam eget sollicitudin</p>
              <div className="why-us-div">
                <div className="why-us-cards">
                  <FaGraduationCap className="why-icons"/>
                  <p>Award winning education</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                </div>
                <div className="why-us-cards">
                  <FaBookOpen className="why-icons"/>
                  <p>Dynamic innovative learning</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                </div>
                <div className="why-us-cards">
                  <FaCertificate className="why-icons"/>
                  <p>Career growth</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                </div>
                <div className="why-us-cards">
                  <FaUserFriends className="why-icons"/>
                  <p>Access to CryptoChuos Alumni network</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="container" id="our-success">
            <h3>OUR SUCCESS</h3>
            <h2>What Our Students Say About Us</h2>
          </div>
    </div>
    <Footer />
    
          
</div>
  
  );
};
  
export default About;