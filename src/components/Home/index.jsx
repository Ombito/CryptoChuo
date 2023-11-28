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
                    <div>
                        <div>
                            <p>40K+</p>
                            <p>Happy Students</p>
                        </div>
                        <div>
                            <p>10K+</p>
                            <p>Online Classes</p>
                        </div>
                        <div>
                            <p>20K+</p>
                            <p>Total Courses</p>
                        </div>
                    </div>
                </div>

                <div>
                    <img className='homecrypto' src={bitcoin} alt="Crypto Banner" />
                </div>
            </div>
            <div>
                <h3>Trusted by 5,000+ Companies Worldwide</h3>

            </div>
            <div>
                <img src={bitcoin} alt="" />
                <h4>Welcome to Web3.0 Learning Center</h4>
                <p>Bridging the relationship between</p>
                <button>More About</button>
            </div>
            <div>
                <h3>Latest Releases</h3>
                <div>
                    <img src="" />
                    <p>5 ways to improve your wallet security</p>
                    <p>Intermediate</p>
                    <p>4 hours</p>
                </div>
                <div>
                    <img src="" />
                    <p>The relationship between blockchain and ai</p>
                    <p>Intermediate</p>
                    <p>4 hours</p>
                </div>
                <div>
                    <img src="" />
                    <p>What is hash rate</p>
                    <p>Intermediate</p>
                    <p>4 hours</p>
                </div>
                <div>
                    <img src="" />
                    <p>What is web 3 wallet</p>
                    <p>Intermediate</p>
                    <p>4 hours</p>
                </div>
                <div>
                    <img src="" />
                    <p>% wats to improve your wallet security</p>
                    <p>Intermediate</p>
                    <p>4 hours</p>
                </div>
                <div>
                    <img src="" />
                    <p>% wats to improve your wallet security</p>
                    <p>Intermediate</p>
                    <p>4 hours</p>
                </div>
            </div>
            <div>
                <h1>Join the Crypto Academy</h1>
                <p>Registration is now open!</p>
                <div>
                    <div>
                        <img src="" />
                        <p>learn in a cohort</p>
                    </div>
                    <div>
                        <img src="" />
                        <p>Join a community</p>
                    </div>
                    <div>
                        <img src="" />
                        <p>Invest in your career</p>
                    </div>
                </div>
                <button>Enroll now</button>
            </div>
            <div>
                <h3>Frequently Asked Questions</h3>
                <p>What is bloackchain</p>
                <p>What is bloackchain</p>
                <p>What is bloackchain</p>
                <p>What is bloackchain</p>
            </div>
            <div>
                <h5>Subscribe to our newsletter</h5>
                <input type="text" placeholder="Enter your email address" />
                <input type="checkbox" />
                <label>I have read and aggred to CrptoChuos terms of Service</label>
                <button>Subscribe</button>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
