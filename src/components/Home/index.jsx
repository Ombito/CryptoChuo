import React from 'react';
import "../Home/style.css";
import { Link } from 'react-router-dom';
import bitcoin from '../Assets/banner.jpg';
import Navbar from '../Navbar/navbar.jsx';
import Footer from '../Footer/index.jsx';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className='content'>
                <div className='homepage'>
                    <h2>Trusted platform <br/> for, <span className='crypto'>Crypto</span> Education.</h2>
                    <p className='paragraph'>Start learning to buy and sell <br /> cryptocurrency with the best blockchain bootcamp.</p>
                    <Link to="/signup">
                        <button className="enroll-button" type='submit'>Enroll Now</button>
                    </Link>
                </div>
                <div>
                    <img className='homecrypto' src={bitcoin} alt="Crypto Banner" />
                </div>
            </div>
            <div id="stats">
                <div>
                    <p className="numbers">400+</p>
                    <p>Students</p>
                </div>
                <div>
                    <p className="numbers">1K+</p>
                    <p>Online Classes</p>
                </div>
                <div>
                    <p className="numbers">10K+</p>
                    <p>Total Courses</p>
                </div>
                <div>
                    <p className="numbers">124</p>
                    <p>Mentors</p>
                </div>
                <div>
                    <p className="numbers">50+</p>
                    <p>Partners</p>
                </div>
            </div>
            <div>
                <h3>Trusted by 5,000+ Companies Worldwide</h3>

            </div>
            <div className="home-hero">
                <img className="content-img" src={bitcoin} alt="" />
                <div>
                    <h4>Welcome to Web3.0 Learning Center</h4>
                    <p>Through it's online platform, Cryptochuo offers students the opportunity to access web 3.0 skill development, opportunities, mentorship and tailored curriculum to enable them learn and accelerate their activities and become global change makers</p>
                    <button>Join our community</button>
                </div>
            </div>
            <h3>Trending</h3>
            <div id="home-card-container">
                <div className="home-card">
                    <img src="" alt=""/>
                    <p>5 ways to improve your wallet security</p>
                    <p>Intermediate</p>
                    <p>4 hours</p>
                </div>
                <div className="home-card">
                    <img src="" alt=""/>
                    <p>The relationship between blockchain and ai</p>
                    <p>Intermediate</p>
                    <p>4 hours</p>
                </div>
                <div className="home-card">
                    <img src="" alt=""/>
                    <p>What is hash rate</p>
                    <p>Intermediate</p>
                    <p>4 hours</p>
                </div>
                <div className="home-card">
                    <img src="" alt=""/>
                    <p>What is web 3 wallet</p>
                    <p>Intermediate</p>
                    <p>4 hours</p>
                </div>
                <div className="home-card">
                    <img src="" alt=""/>
                    <p>% wats to improve your wallet security</p>
                    <p>Intermediate</p>
                    <p>4 hours</p>
                </div>
                <div className="home-card">
                    <img src="" alt=""/>
                    <p>% wats to improve your wallet security</p>
                    <p>Intermediate</p>
                    <p>4 hours</p>
                </div>
            </div>
            <div className='topics'>
                <h2>Topics</h2>
                <div className='topics-container'>
                    <div className='topic'>
                        <h5>Basics</h5>
                        <img src="" alt="" />
                    </div>
                    <div className='topic'>
                        <h5>Bitcoin</h5>
                        <img src="" alt="" />
                    </div>
                    <div className='topic'>
                        <h5>DeFi</h5>
                        <img src="" alt="" />
                    </div>
                    <div className='topic'>
                        <h5>Ethereum</h5>
                        <img src="" alt="" />
                    </div>
                    <div className='topic'>
                        <h5>Security</h5>
                        <img src="" alt="" />
                    </div>
                    <div className='topic'>
                        <h5>NFT's</h5>
                        <img src="" alt="" />
                    </div>
                    <div className='topic'>
                        <h5>Yield farming</h5>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
            <div className='join'>
                <h1>Partner with us to educate the world about Web3.</h1>
                <p>CryptoChuo offers tools and resources for your organization to skill up and scale up. Become a partner and get access to all these tools and more</p>
                <div className='join-container'>
                    <ul>
                        <li>Hackathons & mentorships for your students</li>
                        <li>Blockchain, crypto & Web3 courses with career certificates</li>
                        <li>Free workshops & webinars</li>
                        <li>Enroll your school in our Student Ambassador program</li>
                    </ul>
                </div>
                <button className='enroll-button'>Become a partner</button>
            </div>
            <div className='faq'>
                <h3>Frequently Asked Questions</h3>
                <p>What is bloackchain</p>
                <p>What is bloackchain</p>
                <p>What is bloackchain</p>
                <p>What is bloackchain</p>
            </div>
            <div className='subscribe'>
                <h5>Subscribe to our newsletter</h5>
                <input type="text" placeholder="Enter your email address" />
                <div className='subscribe-checkbox'>
                    <input type="checkbox" />
                    <label>I have read and aggred to CrptoChuos terms of Service</label>
                </div>
                <button>Subscribe</button>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
