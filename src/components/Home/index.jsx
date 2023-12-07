import React, { useState } from 'react';
import "../Home/style.css";
import { Link } from 'react-router-dom';
import bitcoin from '../Assets/banner.jpg';
import Navbar from '../Navbar/navbar.jsx';
import Footer from '../Footer/index.jsx';

const Home = () => {
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
                                <button className="enroll-button" type='submit'>Enroll Now</button>
                            </Link>
                        </div>
                        <div>
                            <img className='homecrypto' src={bitcoin} alt="Crypto Banner" />
                        </div>
                    </div>
                </div>
                <div class="container" id="stats">
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
                <div className="home-hero">
                    <div class="container" id="home-describe">
                        <img className="content-img" src={bitcoin} alt="" />
                        <div id="describe-hero">
                            <h4>Welcome to Web3.0 Learning Center</h4>
                            <p>Through it's online platform, Cryptochuo offers students the opportunity to access web 3.0 skill development, opportunities, mentorship and tailored curriculum to enable them learn and accelerate their activities and become global change makers</p>
                            <button className='join-community-btn'>Join our community</button>
                        </div>
                    </div>
                </div>
                <div class="container" >
                    
                    <div id="home-card-container">
                    {/* <h3>Trending</h3> */}
                        <div className="course-card">
                            <img src="" alt=""/>
                            <div class="course-details">
                                <h2>Course Title</h2>
                                <p>Course Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>Duration: 8 weeks</p>
                                <p class="rating">Rating: 
                                <span class="star">&#9733;</span>
                                <span class="star">&#9733;</span>
                                <span class="star">&#9733;</span>
                                <span class="star">&#9733;</span>
                                <span class="star">&#9734;</span>
                                </p>
                                <a href="#" class="btn">Enroll Now</a>
                            </div>
                        </div>
                        <div className="course-card">
                            <img src="" alt=""/>
                            <div class="course-details">
                                <h2>Course Title</h2>
                                <p>Course Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>Duration: 8 weeks</p>
                                <p class="rating">Rating: 
                                <span class="star">&#9733;</span>
                                <span class="star">&#9733;</span>
                                <span class="star">&#9733;</span>
                                <span class="star">&#9733;</span>
                                <span class="star">&#9734;</span>
                                </p>
                                <a href="#" class="btn">Enroll Now</a>
                            </div>
                        </div>
                        <div className="course-card">
                            <img src="" alt=""/>
                            <div class="course-details">
                                <h2>Course Title</h2>
                                <p>Course Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>Duration: 8 weeks</p>
                                <p class="rating">Rating: 
                                <span class="star">&#9733;</span>
                                <span class="star">&#9733;</span>
                                <span class="star">&#9733;</span>
                                <span class="star">&#9733;</span>
                                <span class="star">&#9734;</span>
                                </p>
                                <a href="#" class="btn">Enroll Now</a>
                            </div>
                        </div>
                        <div className="course-card">
                            <img src="" alt=""/>
                            <div class="course-details">
                                <h2>Course Title</h2>
                                <p>Course Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>Duration: 8 weeks</p>
                                <p class="rating">Rating: 
                                <span class="star">&#9733;</span>
                                <span class="star">&#9733;</span>
                                <span class="star">&#9733;</span>
                                <span class="star">&#9733;</span>
                                <span class="star">&#9734;</span>
                                </p>
                                <a href="#" class="btn">Enroll Now</a>
                            </div>
                        </div>
                        <div className="course-card">
                            <img src="" alt=""/>
                            <div class="course-details">
                                <h2>Course Title</h2>
                                <p>Course Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>Duration: 8 weeks</p>
                                <p class="rating">Rating: 
                                <span class="star">&#9733;</span>
                                <span class="star">&#9733;</span>
                                <span class="star">&#9733;</span>
                                <span class="star">&#9733;</span>
                                <span class="star">&#9734;</span>
                                </p>
                                <a href="#" class="btn">Enroll Now</a>
                            </div>
                        </div>
                        <div className="course-card">
                            <img src="" alt=""/>
                            <div class="course-details">
                                <h2>Course Title</h2>
                                <p>Course Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>Duration: 8 weeks</p>
                                <p class="rating">Rating: 
                                <span class="star">&#9733;</span>
                                <span class="star">&#9733;</span>
                                <span class="star">&#9733;</span>
                                <span class="star">&#9733;</span>
                                <span class="star">&#9734;</span>
                                </p>
                                <a href="#" class="btn">Enroll Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container" className='topics'>
                    <div class="container">
                        <h2>Topics</h2>
                        <div className='topics-container'>
                            <div className='topic'>
                                <h5>Basics</h5>
                            </div>
                            <div className='topic'>
                                <h5>Blockchain</h5>
                            </div>
                            <div className='topic'>
                                <h5>DeFi</h5>
                            </div>
                            <div className='topic'>
                                <h5>Ethereum</h5>
                            </div>
                            <div className='topic'>
                                <h5>Security</h5>
                            </div>
                            <div className='topic'>
                                <h5>NFT's</h5>
                            </div>
                            <div className='topic'>
                                <h5>Yield farming</h5>
                            </div>
                            <div className='topic'>
                                <h5>Regulatory</h5>
                            </div>
                            <div className='topic'>
                                <h5>Gaming</h5>
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
                        <h2>Contact Us</h2>
                        <p>Reach out to us anytime, We are open fro training, partnership, industry events hosting and your questions.
                        </p>
                        <div class="contact-container">
                            <div class="contact-info">
                                <h6>Administrative Support</h6>
                                <p>admin@cryptochuo.com</p>
                                <h6>Learner Support</h6>
                                <p>student-support@cryptochuo.com</p>
                                <p>Nairobi, Kenya</p>
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
                        <input type="text" placeholder="Enter your email address" />
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
