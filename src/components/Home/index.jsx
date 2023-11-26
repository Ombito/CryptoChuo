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
            <Footer />
        </div>
    );
};

export default Home;
