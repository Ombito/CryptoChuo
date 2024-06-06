import React from 'react';
import "../About/style.css"
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import team3 from "../Assets/team3.jpg"
import team2 from "../Assets/team2.png";
import WhatsAppChat from '../WhatsAppChat/index.jsx';
import banner from "../Assets/learn3.jpeg";
import ourstory from "../Assets/our-story.png";
import binance from "../Assets/binance.png";
import bybit from "../Assets/bybit.png";
import avalanche from "../Assets/avalanche.png";
import polygon from "../Assets/polygon.png";
import opensea from "../Assets/opensea.png";
import ledger from "../Assets/ledger.png";
import kraken from "../Assets/kraken1.png";
import join from '../Assets/joinnow.png';
import company from '../Assets/student4.jpg';
import certificate from "../Assets/certificate1.png";
import learning from "../Assets/innovative.png";
import growth from "../Assets/growth.png";
import alumni from "../Assets/alumni.png";
import { FaUserFriends, FaGraduationCap, FaBookOpen, FaBriefcase, FaCheck } from  'react-icons/fa';


const About = () => {
  return (
    <div id="about">
        <div className='aboutus'>
          <div id="bannerimg">
            <img src={company} alt="" />
            <h2 id='about-name'>About Us</h2>
          </div>
          <div id="our-story">
            <img src={ourstory} alt="" height="300" width="400"/>
            <div>
              <h2>Our Story</h2>
                <p>As we continue to lead the way in blockchain education, CryptoChuo remains dedicated to fostering a dynamic and supportive learning environment. Our journey since 2020 has been marked by a relentless pursuit of excellence in providing unparalleled resources for Blockchain and Web3 Practitioners. Our mission is to make blockchain education accessible and empower blockchain enthusiasts with the tools they need to thrive in a rapidly evolving digital landscape. Through our user-friendly platform, learners can engage with cutting-edge content, interactive modules, and collaborative discussions. We foster an environment where curiosity is encouraged, questions are welcomed, and knowledge is shared. Our industry-recognized certification programs are a testament to our dedication to excellence. These programs serve as a hallmark of proficiency and are widely acknowledged within the blockchain and Web3 communities. We take pride in being a catalyst for professional growth, enabling individuals to elevate their skills and advance to the next level of success.
              </p>
            </div>
          </div>
          <div className="about-hero">
            <div id="about-banner">
              <div> 
                <p className='about'>At CryptoChuo, we go beyond the basics. Our curriculum is designed to equip you with the knowledge and skills needed to navigate the complexities of the crypto ecosystem. Our cutting-edge program goes beyond the basics empowering learners to delve into the essentials of blockchain and distributed ledger technology (DLT). Our graduates emerge as trailblazers ready to tackle the challenges and opportunities presented by the dynamic world of cryptocurrency. But wait, there's more! Our program isn't just about learning; it's an immersive journey into the future of finance. Join a community of forward-thinkers, disruptors, and visionaries who are reshaping the narrative of cryptocurrency. At CryptoChuo, we believe that knowledge is power, and we're here to empower you.
                </p>
              </div>
              <img src={banner} alt="" className="about-banner-img"/>
            </div>
          </div>
          <div id="partner-container">           
            <div id="why-us">
              <h3>Why CryptoChuo</h3>
              <div className="why-us-div">
                <div className="why-us-cards">   
                  <img src={certificate} alt='' height='100' width='100' />
                  <h6>Award winning education</h6>
                  {/* <p>Our certificates stand as a testament to the quality of education you receive. When you choose Cryptochuo, you're choosing a platform whose credentials are acknowledged and respected in the industry.</p> */}
                </div>
                <div className="why-us-cards"> 
                  <img src={learning} alt='' height='100' width='100' />
                  <h6>Dynamic innovative learning</h6>
                  {/* <p>Our platform provides students with tailored curricula that align with their individual aspirations. We leverage cutting-edge technologies through simulations, interactive projects, and collaborative exercises to create an immersive learning experience.</p> */}
                </div>
                <div className="why-us-cards">
                  <img src={growth} alt='' height='100' width='100' />
                  <h6>Career growth</h6>
                  {/* <p>Cryptochuo equips students with the expertise needed to thrive in the competitive job market with confidence. Our commitment to staying current ensures that students are prepared for the challenges and opportunities of the future.</p> */}
                </div>
                <div className="why-us-cards">
                  <img src={alumni} alt='' height='100' width='100' />
                  <h6>Extensive Alumni network</h6>
                  {/* <p>With our thriving Alumni network opening doors to a myriad of opportunities, this network serves as a valuable resource for connecting with like-minded professionals, industry leaders, and potential collaborators.</p> */}
                </div>             
            </div>
            <div id="partners">
              <div className="hero-partners">
                <h3>Our Partners</h3>
              </div>
              <div id="logo-div">
                <img src={binance} alt="" height="70" width="100" />
                <img src={opensea} alt="" height="100" width="150" />
                <img src={avalanche} alt="" height="70" width="70" />
                <img src={polygon} alt="" height="70" width="70" />
                <img src={ledger} alt="" height="90" width="120" />
                <img src={bybit} alt="" height="70" width="100" />
                <img src={avalanche} alt="" height="70" width="70" />
                <img src={kraken} alt="" height="70" width="110" />
                <img src={binance} alt="" height="70" width="100" />
                <img src={opensea} alt="" height="100" width="150" />
                <img src={polygon} alt="" height="70" width="70" />
                <img src={ledger} alt="" height="90" width="120" />
                <img src={bybit} alt="" height="70" width="100" />
                <img src={avalanche} alt="" height="70" width="70" />
                <img src={polygon} alt="" height="70" width="70" />
              </div>
            </div>
          </div>
          </div>
          <div id="our-success">
            <h2>Success Stories</h2>
            <div id="testimonials-container">
              <div className="testimonials">
                <p>"CryptoChuo was specifically created to help people like you and me transition to a career in Web3 and just weeks after completing the course I accepted a full-time role at Grot."
                </p>
                <div style={{display: 'flex', gap: '30px'}}>
                  <img src={team3} alt="" height="80" width="80" />
                  <div>
                    <h5>Regina Wanjiru</h5>
                    <div>
                      <p class="rating"> 
                      <span class="star">&#9733;</span>
                      <span class="star">&#9733;</span>
                      <span class="star">&#9733;</span>
                      <span class="star">&#9733;</span>
                      <span class="star">&#9734;</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonials">  
                <p>"The courses are good and very straightforward. Community support is great on Telegram and Discord where I share my trade experiences and take advise from others."
                </p>
                <div style={{display: 'flex', gap: '30px'}}>
                  <img src={team2} alt="" height="80" width="80" />
                  <div>
                    <h5>Timothy Waswa</h5>
                    <div>
                      <p class="rating"> 
                      <span class="star">&#9733;</span>
                      <span class="star">&#9733;</span>
                      <span class="star">&#9733;</span>
                      <span class="star">&#9733;</span>
                      <span class="star">&#9734;</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="subscribe">
            <h2  style={{"text-align": "center"}}>Choose Your Subscription Plan</h2>
            <div id="subscription-plan">
              <div className="subscription-card">
                <h4>Basic Membership</h4>
                <h2>$99.99 / month</h2>
                <p><FaCheck className="check"/> Live Support</p>
                <p><FaCheck className="check"/> Web3, AI, Content Creation Masterclass</p>
                <p><FaCheck className="check"/> Weekly Live Session</p>
                <p><FaCheck className="check"/> Trading Indicators</p>
                <button>Get Plan</button>
              </div>
              <div className="subscription-card">
                <h4>Advanced Membership</h4>
                <h2>$299.99 / month</h2>
                <p><FaCheck className="check"/> Live Support</p>
                <p> <FaCheck className="check"/> Web3, AI, Content Creation Masterclass</p>
                <p><FaCheck className="check"/> Daily Live Session</p>
                <p><FaCheck className="check"/> Trading Indicators</p>
                <p><FaCheck className="check"/> VIP Stream</p>
                <button>Get Plan</button>
              </div>
              <div className="subscription-card">
                <h4>Premium Membership</h4>
                <h2>$499.99 / month</h2>
                <p><FaCheck className="check"/> Full Support</p>
                <p><FaCheck className="check"/> Web3, AI, Content Creation Masterclass</p>
                <p><FaCheck className="check"/> Daily Live Session</p>
                <p><FaCheck className="check"/> Trading Indicators</p>
                <p><FaCheck className="check"/> VIP Stream</p>
                <p><FaCheck className="check"/> VIP Q&A</p>
                <button>Get Plan</button>
              </div>
              </div>
          </div>
          <div id="about-contact-hero">
                <img src={join} alt="" height="100" width="130" />
                <h6>Ready to learn the world's most in-demand Blockchain, Web3 and AI skills?</h6>
                <div id="about-contact">
                  <button>Join now</button>
                  <button>Contact</button>
                </div>
              </div>
          <WhatsAppChat />
    </div>
    
          
</div>
  
  );
};
  
export default About;