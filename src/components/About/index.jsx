import React from 'react';
import "../About/style.css"
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import team3 from "../Assets/team3.jpg"
import team2 from "../Assets/team2.png";
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
import { FaUserFriends, FaGraduationCap, FaBookOpen, FaBriefcase } from  'react-icons/fa';


const About = () => {
  return (
    <div>
        <Navbar /> 
        <div className='aboutus'>
          <div id="about-banner" class="container">
            <div> 
              <p className='about'>At CryptoChuo, we go beyond the basics. Our curriculum is designed to equip you with the knowledge and skills needed to navigate the complexities of the crypto ecosystem. Our cutting-edge program goes beyond the basics empowering participants to delve into the essentials of blockchain and distributed ledger technology (DLT). Gain insights into the pivotal role blockchain analytics plays in shaping the dynamics of the crypto ecosystem. Our graduates emerge as trailblazers, ready to tackle the challenges and opportunities presented by the dynamic world of cryptocurrency. But wait, there's more! Our program isn't just about learning; it's an immersive journey into the future of finance. Join a community of forward-thinkers, disruptors, and visionaries who are reshaping the narrative of cryptocurrency. At CryptoChuo, we believe that knowledge is power, and we're here to empower you.
              
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
                <p>As we continue to lead the way in blockchain education, CryptoChuo remains dedicated to fostering a dynamic and supportive learning environment. Our journey since 2020 has been marked by a relentless pursuit of excellence in providing unparalleled resources for Blockchain and Web3 Practitioners. Our mission is to make blockchain education accessible and empower blockchain enthusiasts with the tools they need to thrive in a rapidly evolving digital landscape. Through our user-friendly platform, learners can engage with cutting-edge content, interactive modules, and collaborative discussions. We foster an environment where curiosity is encouraged, questions are welcomed, and knowledge is shared. Our industry-recognized certification programs are a testament to our dedication to excellence. These programs serve as a hallmark of proficiency and are widely acknowledged within the blockchain and Web3 communities. We take pride in being a catalyst for professional growth, enabling individuals to elevate their skills and advance to the next level of success. <br></br><br></br>What sets CryptoChuo apart is our team of seasoned researchers, instructors, and subject matter experts. Comprising real-world industry professionals, our team brings a wealth of knowledge and substantial experience to the table. This ensures that our courses and programs are not just theoretical but grounded in practical insights gained from hands-on industry involvement. Join us on this transformative journey, where knowledge meets innovation, and success knows no bounds.
              </p>
            </div>
          </div>
          <div id="partner-container">
            <div class="container" id="partners">
              <div className="hero-partners">
                <h4>Our Partners</h4>
                <p>From industry giants to emerging startups, our partners represent a spectrum of expertise, contributing to the richness of our platform. Join our league of visionary partners and become an integral part of the global blockchain revolution. Together we'll unlock new horizons and set the stage for the next wave of blockchain innovation.</p>
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
                  <FaBriefcase className="why-icons"/>
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
            <div id="testimonials-container">
              <div className="testimonials">
                <img src={team3} alt="" height="80" width="80" />
                <p>CryptoChuo helps see how many days you need to work to reach your financial goal for this month and year
                </p>
                <div>
                  <p class="rating"> 
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9734;</span>
                  </p>
                </div>
                <h5>Regina Wanjiru</h5>
              </div>
              <div className="testimonials">
                <img src={team2} alt="" height="80" width="80" />
                <p>CryptoChuo helps see how many days you need to work to reach your financial goal for this month and year
                </p>
                <div>
                  <p class="rating"> 
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9733;</span>
                  <span class="star">&#9734;</span>
                  </p>
                </div>
                <h5>Timothy Omondi</h5>
              </div>
            </div>
          </div>
          <div class="container" id="about-contact-hero">
            <h6>Ready to learn the world's most in-demand Blockchain, Web3 and AI skills?</h6>
            <div id="about-contact">
              <button>Join now</button>
              <button>Contact</button>
            </div>
          </div>
    </div>
    <Footer />
    
          
</div>
  
  );
};
  
export default About;