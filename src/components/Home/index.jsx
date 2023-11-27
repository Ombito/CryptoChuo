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
                <h2>Choose your subscription plan</h2>
                <div>
                    <h4>Basic</h4>
                    <p>$9.99/ month</p>
                    <p>Email support</p>
                    <button>Get Plan</button>
                </div>
                <div>
                    <h4>Advanced</h4>
                    <p>$19.99/ month</p>
                    <p>Email support</p>
                    <p>Download videos</p>
                    <p>Export projects</p>
                    <button>Get Plan</button>
                </div>
                <div>
                    <h4>Premium</h4>
                    <p>$29.99/ month</p>
                    <p>Full support</p>
                    <p>Download videos</p>
                    <p>Export projects</p>
                    <p>Premium</p>
                    <button>Get Plan</button>
                </div>
            </div>
            <div>
                <h5>Subscribe to our newsletter</h5>
                <input type="text" placeholder="Enter your email address" />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
