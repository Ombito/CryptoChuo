import React, { useState } from 'react';
import "../Home/style.css";
import { Link } from 'react-router-dom';
import online from '../Assets/online-meeting.jpeg';
import Course1 from '../Assets/Courses/science.jpeg';
import Course2 from '../Assets/Courses/regulation.png';
import Course3 from '../Assets/Courses/bitcoindecentralization.png';
import Course4 from '../Assets/Courses/bitcoin.png';
import Course5 from '../Assets/Courses/p2p.png';
import Course6 from '../Assets/Courses/mobile.png';
import Course7 from '../Assets/Courses/trading.jpeg';
import Course8 from '../Assets/Courses/bitcoinmining.png';
import Navbar from '../Navbar/navbar.jsx';
import Footer from '../Footer/index.jsx';
import { FaTelegram, FaLinkedin, FaWhatsapp, FaDiscord } from  'react-icons/fa';
import ContactUs from '../Assets/contact.png';
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';

const Home = ({user}) => {
    console.log(user)
    const [ counterOn, setCounterOn ] = useState(false)
    const faqData = [
        { question: 'So your aim is educating people on Blockchain technology?', answer: "It's ok you can say it. Decentralization is important but what underpins it? That's the complication. Our strategy is to create grassroot level of mass awareness on cryptocurrencies and Blockchain." },
        { question: 'Who should attend these courses?', answer: 'The criteria is simple, are you willing to kickstart your Web3 career and achieve certifications? Yes? Good, welcome to CryptoChuo. ' },
        { question: 'What is Web 3.0?', answer: 'Web 3.0 is the next generation of Internet technology that heavily relies on the use of machine learning and artificial intelligence (AI). It aims to create more open, connected, and intelligent websites and web applications, which focus on using a machine-based understanding of data. Through the use of AI and advanced machine learning techniques, Web 3.0 aims to provide more personalized and relevant information at a faster rate. ' },
        { question: 'What is Cryptocurrency?', answer: ' A cryptocurrency is a standard currency used for making or receiving payments on the blockchain, with the most popular cryptocurrency being Bitcoin. Altcoins are the various alternative cryptocurrencies that were launched after the massive success achieved by Bitcoin. The term means alternative coins—that is—other than bitcoins.' },
        { question: 'What are smart contracts?', answer: "Smart contracts are lines of code that are stored on a blockchain and automatically execute when predetermined terms and conditions are met. At the most basic level, they are programs that run as they’ve been set up to run by the people who developed them. The benefits of smart contracts are most apparent in business collaborations, in which they are typically used to enforce some type of agreement so that all participants can be certain of the outcome without an intermediary’s involvement." },
        { question: 'What is Blockchain mining?', answer: "Blockchain mining, a peer-to-peer computer process, is used to secure and verify cryptographic secured transactions. Mining involves crypto miners who add cryptocurrency transaction data to global public ledger of past transactions. In the ledgers, blocks are secured by miners and are connected to each other forming a chain. Cryptocurrencies or tokens, such as Bitcoin or Ethereum, have no central clearing house. Transactions are generally verified in decentralized clearing systems wherein people contribute computing resources to verify the same. This process of verifying transactions in called mining." },
      ];
      
      const [expandedIndex, setExpandedIndex] = useState(null);
    const handleToggleAnswer = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
      };

    return (
        <div>
            <Navbar/>
            <div id="home-container">
                <div class="container" className='content'>
                    <div class="container"id="banner-div">
                        <div className='homepage'>
                            <h2>Trusted platform <br/> for, <span className='crypto'>Crypto</span> Education.</h2>
                            <p className='paragraph'>Start learning to buy and sell <br /> cryptocurrency with the best blockchain bootcamp.</p>
                            <Link to="/signup">
                                <button className="enroll-button" type='submit'>Get Started</button>
                            </Link>
                        </div>
                        {/* <div>
                            <img className='homecrypto' src={bitcoin} alt="Crypto Banner" />
                        </div> */}
                    </div>
                </div>
                <div class="container" id="stats">
                    <ScrollTrigger id="stats1" onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
                        <div>
                            <h5 className="numbers">{counterOn && <CountUp className="number-color" start={0} end={2000} duration={5}/>}+<br></br><br></br>  Students</h5>
                        </div>
                        <div>
                            <h5 className="numbers"> {counterOn && <CountUp className="number-color" start={0} end={200} duration={5}/>}+<br></br><br></br> Online Classes</h5>
                        </div>
                        <div>
                            <h5 className="numbers"> {counterOn && <CountUp className="number-color" start={0} end={1000} duration={5}/>}+<br></br><br></br>  Total Courses</h5>
                        </div>
                        <div>
                            <h5 className="numbers">{counterOn && <CountUp className="number-color" start={0} end={261} duration={5}/>}+<br></br><br></br>Mentors</h5>
                            <p></p>
                        </div>
                        <div>
                            <h5 className="numbers">{counterOn && <CountUp className="number-color" start={0} end={50} duration={5}/>}+<br></br><br></br>  Partners</h5>
                        </div>
                    </ScrollTrigger>
                </div>
                <div className="home-hero">
                    <div class="container" id="home-describe">
                        <img className="content-img" src={online} alt="" />
                        <div id="describe-hero">
                            <h4>Welcome to Web3.0 Learning Center</h4>
                            <p>Cryptochuo stands at the forefront of a revolutionary educational realm redefining how students engage with the digital frontier. Our online platform is not merely an educational portal but a dynamic space where learners embark on a journey of web 3.0 skill development, embracing opportunities, mentorship, and a customized curriculum. Cryptochuo goes beyond the traditional confines of education, fostering an environment where students become global change-makers.
                            <br></br><br></br>Recognizing that each student is unique, the platform designs learning paths that cater to individual strengths, interests, and goals. This personalized approach ensures that students not only acquire knowledge but also develop skills that are relevant and impactful. Don't just adapt to the future, thrive in it. Join us on this exciting adventure towards a brighter and more empowered future.                  
                            </p>
                            <button className='join-community-btn'>Join our community</button>
                        </div>
                    </div>
                </div>
                <div class="container" id="course-div">
                    <h3>Trending Courses</h3>
                    <div id="home-card-container">
                        <div className="course-card">
                            <img src={Course1} alt="" className="course-img"/>
                            <div class="course-details">
                                <h6>Blockchain Advanced Level: Industry Applications</h6>
                                <p>Duration: 1 week</p>                             
                                <div className="amount">
                                    <h6>$199.99</h6>
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
                        <div className="course-card">
                            <img src={Course2} alt="" className="course-img"/>
                            <div class="course-details">
                                <h6>Cryptocurrency Regulation: Accounting Rules For Crypto & Bitcoin</h6>
                                <p>Duration: 4 hours</p>                             
                                <div className="amount">
                                    <h6>$24.99</h6>
                                    <div>
                                        <p class="rating"> 
                                        <span class="star">&#9733;</span>
                                        <span class="star">&#9733;</span>
                                        <span class="star">&#9733;</span>
                                        <span class="star">&#9733;</span>
                                        <span class="star">&#9733;</span>
                                        </p>
                                    </div>
                                </div>      
                            </div>
                        </div>
                        <div className="course-card">
                            <img src={Course3} alt="" className="course-img"/>
                            <div class="course-details">
                                <h6>DeFi- Decentralized Finance - Future of Finance Masterclass</h6>
                                <p>Duration: 6 hours</p>                             
                                <div className="amount">
                                    <h6>$19.99</h6>
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
                        <div className="course-card">
                            <img src={Course4} alt="" className="course-img"/>
                            <div class="course-details">
                                <h6>Blockchain - Complete Blockchain Course for Beginners</h6>
                                <p>Duration: 12 hours</p> 
                                <div className="amount">
                                    <h6>$49.99</h6>
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
                        <div className="course-card">
                            <img src={Course5} alt="" className="course-img"/>
                            <div class="course-details">
                                <h6>Create Your Own CryptoCurrency With ERC-20 Tokens on ETH</h6>
                                <p>Duration: 8 hours</p>                             
                                <div className="amount">
                                    <h6>$34.99</h6>
                                    <div>
                                        <p class="rating"> 
                                        <span class="star">&#9733;</span>
                                        <span class="star">&#9733;</span>
                                        <span class="star">&#9733;</span>
                                        <span class="star">&#9734;</span>
                                        <span class="star">&#9734;</span>
                                        </p>
                                    </div>
                                </div>      
                            </div>
                        </div>
                        <div className="course-card">
                            <img src={Course6} alt="" className="course-img"/>
                            <div class="course-details">
                                <h6>Staying Safe: Cryptocurrencies Security Guide</h6>
                                <p>Duration: 12 hours</p>                             
                                <div className="amount">
                                    <h6>$34.99</h6>
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
                        <div className="course-card">
                            <img src={Course7} alt="" className="course-img"/>
                            <div class="course-details">
                                <h6>Cryptocurrency Investing Guide: 2024-2025</h6>
                                <p>Duration: 4 hours</p> 
                                <div className="amount">
                                    <h6>$24.99</h6>
                                    <div>
                                        <p class="rating"> 
                                        <span class="star">&#9733;</span>
                                        <span class="star">&#9733;</span>
                                        <span class="star">&#9733;</span>
                                        <span class="star">&#9734;</span>
                                        <span class="star">&#9734;</span>
                                        </p>
                                    </div>
                                </div>      
                            </div>
                        </div>
                        <div className="course-card">
                            <img src={Course8} alt="" className="course-img"/>
                            <div class="course-details">
                                <h6>Bitcoin Mining: Lightning Network In Bitcoin Explained</h6>
                                <p>Duration: 8 hours</p> 
                                <div className="amount">
                                    <h6>$32.99</h6>
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
                <div class="container" className='topics'>
                    <div class="container">
                        <h3>Our students also learn</h3>
                        <div className='topics-container'>
                            <div className='topic'>
                                <h5>Web3</h5>
                            </div>
                            <div className='topic'>
                                <h5>Blockchain</h5>
                            </div>
                            <div className='topic'>
                                <h5>DeFi</h5>
                            </div>
                            <div className='topic'>
                                <h5>Metaverse</h5>
                            </div>
                            <div className='topic'>
                                <h5>Security</h5>
                            </div>
                            <div className='topic'>
                                <h5>NFT's</h5>
                            </div>
                            <div className='topic'>
                                <h5>Cryptography</h5>
                            </div>
                            <div className='topic'>
                                <h5>Privacy</h5>
                            </div>
                            <div className='topic'>
                                <h5>GameFi</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='join'>
                    <div class="container">
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
                </div>
                <div className='faq'>
                    <h3>Frequently Asked Questions</h3>
                    {faqData.map((item, index) => (
                        <div key={index} className='faq-item'>
                        <div className='question' onClick={() => handleToggleAnswer(index)}>
                            {item.question}
                            <span className={`plus ${expandedIndex === index ? 'minus' : 'plus'}`}>
                            {expandedIndex === index ? '-' : '+'}
                            </span>
                        </div>
                        {expandedIndex === index && <p className='answer'>{item.answer}</p>}
                        </div>
                    ))}
                </div>
                <div id="contact-div">
                    <div class="container">
                        <h2 className="contact-p">Contact Us</h2>
                        <p className="contact-p">Reach out to us anytime, We are open for training, partnership, industry events hosting and your questions.
                        </p>
                        <div class="contact-container">
                            <div class="contact-info">
                                <img id="contact-img" src={ContactUs} alt="contact" />
                                <div>
                                    <h6>Administrative Support</h6>
                                    <p><a href="mailto:admin@cryptochuo.com">admin@cryptochuo.com</a></p>
                                    <h6>Learner Support</h6>
                                    <p><a href="mailto:admin@cryptochuo.com">student-support@cryptochuo.com</a></p>
                                    <h6>Nairobi, Kenya</h6>
                                    <div>
                                        <div id="contact-icons">
                                            <a href=""><FaLinkedin className="icons"/></a>
                                            <a href=""><FaWhatsapp className="icons"/></a>
                                            <a href=""><FaTelegram className="icons"/></a>
                                            <a href=""><FaDiscord className="icons"/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <form class="contact-form">
                                <label for="fullName">Full Name</label>
                                <input type="text" id="fullName" placeholder="Your Full Name" required/>

                                <label for="phoneNumber">Phone Number</label>
                                <input type="text" id="phoneNumber" placeholder="Your Phone Number" required/>

                                <label for="emailAddress">Email Address</label>
                                <input type="text" id="emailAddress" placeholder="Your Email Address" required/>

                                <label for="subject">Subject</label>
                                <input type="text" id="subject" placeholder="Email Subject" required/>

                                <label for="message">Your message</label>
                                <textarea id="message" placeholder="What can we help you with?" required></textarea>

                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='subscribe'>
                    <div class="container" id="subscribe-div">
                        <h5>Subscribe to our newsletter</h5>
                        <input type="text" placeholder="Enter your email address" id="subscribe-checkbox"/>
                        <div className='subscribe-checkbox'>
                            <input type="checkbox" />
                            <label>I have read and agreed to the Terms of Service.</label>
                        </div>
                        <button className="subscribe-button">Subscribe</button>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Home;
