import React, { useState } from 'react';
import "./style.css"
import { Link } from 'react-router-dom';
import calendar from "../Assets/calendar.png";
import clock from "../Assets/wall-clock.png";
import Navbar from '../Navbar/navbar.jsx';
import Footer from '../Footer/index.jsx';
import Course1 from "../Assets/homepage.jpg";


const Courses = () => {
    const [activeTab, setActiveTab] = useState('allCourses');

    const showTab = (tabName) => {
        setActiveTab(tabName);
    };

    
  return (
    <div> 
      <Navbar />
    <div >       
    </div >
        <div className='courses'>
            <div>
                <h2>Featured Courses</h2>
                <div className="featured-course-description">
                    <img src={Course1} alt="course" id="featured-img"/>
                    <div>
                        <p>Course Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <h4>$50</h4>
                        <button>Enroll Now</button>
                    </div>                  
                </div>
            </div>
            <div className='tabs-container'>
                <p className={`tab ${activeTab === 'allCourses' ? 'active' : ''}`} onClick={() => showTab('allCourses')}>All Courses</p>
                <p className={`tab ${activeTab === 'inProgress' ? 'active' : ''}`} onClick={() => showTab('inProgress')}>In Progress</p>
                <p className={`tab ${activeTab === 'completed' ? 'active' : ''}`} onClick={() => showTab('completed')}>Completed</p>
            </div>
            <div>
                <div className={`tab-content ${activeTab === 'allCourses' ? 'active' : ''}`} id='allCoursesContent'>
                    <h2>All Courses</h2>
                    <p>This is the content for all courses.</p>
                    <div id="filter">
                        <h3>Filter by</h3>
                        <input id="searchcourse"type="text" placeholder='Search for a Course...' />
                    </div>
                    <div className="allCourses-div">
                        <div id="filter-container">
                            <div className="filter-div">
                                <h4>Subject</h4>
                                <div className="checkbox-container">
                                    <input type="checkbox" />
                                    <label>Blockchain</label>
                                </div>
                                <div className="checkbox-container">
                                    <input type="checkbox" />
                                    <label>Cryptocurrency</label>
                                </div>
                                <div className="checkbox-container">
                                    <input type="checkbox" />
                                    <label>Web3</label>
                                </div>
                                <div className="checkbox-container">
                                    <input type="checkbox" />
                                    <label>Smart Contracts</label>
                                </div>
                                <div className="checkbox-container">
                                    <input type="checkbox" />
                                    <label>NFT's</label>
                                </div>
                            </div>
                            <div className="filter-div">
                                <h4>Level</h4>
                                <div className="checkbox-container">
                                    <input type="checkbox" />
                                    <label>Beginner</label>
                                </div>
                                <div className="checkbox-container">
                                    <input type="checkbox" />
                                    <label>Intermediate</label>
                                </div>
                                <div className="checkbox-container">
                                    <input type="checkbox" />
                                    <label>Advanced</label>
                                </div>
                                <div className="checkbox-container">
                                    <input type="checkbox" />
                                    <label>Pro</label>
                                </div>
                            </div>
                            <div className="filter-div">
                                <h4>Duration</h4>
                                <div className="checkbox-container">
                                    <input type="checkbox" />
                                    <label>Less than 4 Hours</label>
                                </div>
                                <div className="checkbox-container">
                                    <input type="checkbox" />
                                    <label>1 - 4 Weeks</label>
                                </div>
                                <div className="checkbox-container">
                                    <input type="checkbox" />
                                    <label>1 - 3 Months</label>
                                </div>
                                <div className="checkbox-container">
                                    <input type="checkbox" />
                                    <label>3 - 6 Months</label>
                                </div>
                            </div>
                            <div className="filter-div">
                                <h4>Languages</h4>
                                <div className="checkbox-container">
                                    <input type="checkbox" />
                                    <label>Chinese</label>
                                </div>
                                <div className="checkbox-container">
                                    <input type="checkbox" />
                                    <label>Swahili</label>
                                </div>
                                <div className="checkbox-container">
                                    <input type="checkbox" />
                                    <label>Arabic</label>
                                </div>
                                <div className="checkbox-container">
                                    <input type="checkbox" />
                                    <label>English</label>
                                </div>
                            </div>
                        </div>
                        <div id="course-hero">
                            <div className="course-card">
                                <img src={Course1} alt="" className="course-img"/>
                                <div class="course-details">
                                    <h4>Course Title</h4>
                                    <p>Course Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>  
                                    <p>Duration: 8 weeks</p>                             
                                    <div className="amount">
                                        <h5>$100</h5>
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
                                <img src={Course1} alt="" className="course-img"/>
                                <div class="course-details">
                                    <h4>Course Title</h4>
                                    <p>Course Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>  
                                    <p>Duration: 8 weeks</p>                             
                                    <div className="amount">
                                        <h5>$100</h5>
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
                                <img src={Course1} alt="" className="course-img"/>
                                <div class="course-details">
                                    <h4>Course Title</h4>
                                    <p>Course Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>  
                                    <p>Duration: 8 weeks</p>                             
                                    <div className="amount">
                                        <h5>$100</h5>
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
                                <img src={Course1} alt="" className="course-img"/>
                                <div class="course-details">
                                    <h4>Course Title</h4>
                                    <p>Course Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>  
                                    <p>Duration: 8 weeks</p>                             
                                    <div className="amount">
                                        <h5>$100</h5>
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
                </div>

                <div className={`tab-content ${activeTab === 'inProgress' ? 'active' : ''}`} id='inProgressContent'>
                    <h2>In Progress</h2>
                    <p>This is the content for courses in progress.</p>
                </div>

                <div className={`tab-content ${activeTab === 'completed' ? 'active' : ''}`} id='completedContent'>
                    <h2>Completed</h2>
                    <p>This is the content for completed courses.</p>
                </div>
            </div>
            
            
            <div className='fundamentals'>
                <h3>Fundamentals of <br/>Bitcoin & Crypto </h3>
                <div className='timeline'>
                    <img src={calendar} width="30" height="30" alt="Course"/>
                    <p className='threeweeks'>3 Weeks</p>
                </div>
                <div className='hourweekly'>
                   <img src={clock} width="30" height="30" alt="Course"/>
                    <p className='hourly'>3-10 hours a week</p>
                </div>

            </div>

            <div className='nft'>
            <h3>NFT's & Web3 <br/> Technologies </h3>
                <div className='nfttimeline'>
                    <img src={calendar} width="30" height="30" alt="Course"/>
                    <p className='fourweeks'>4 Weeks</p>
                </div>
                <div className='nfthourweekly'>
                   <img src={clock} width="30" height="30" alt="Course"/>
                    <p className='nfthourly'>5-12 hours a week</p>

                </div>
            </div>

            <div className='trading'>
            <h3>Trading 101 </h3>
                <div className='tradingtimeline'>
                    <img src={calendar} width="30" height="30" alt="Course"/>
                    <p className='sixweeks'>6 Weeks</p>
                </div>
                <div className='tradinghourweekly'>
                   <img src={clock} width="30" height="30" alt="Course"/>
                    <p className='tradinghourly'>5-12 hours a week</p>

                </div>
            </div>

            <div className='blochchain'>
            <h3>Blockchain Technologies </h3>
                <div className='blockchaintimeline'>
                    <img src={calendar} width="30" height="30" alt="Course"/>
                    <p className='twelveweeks'>12 Weeks</p>
                </div>
                <div className='blockchainhourweekly'>
                   <img src={clock} width="30" height="30" alt="Course"/>
                    <p className='blockchainhourly'>5-12 hours a week</p>

                </div>
            </div>

            <div className='gaming'>
            <h3>Crypto gaming </h3>
                <div className='timeline'>
                    <img src={calendar} width="30" height="30" alt="Course"/>
                    <p className='fourweeks'>4 Weeks</p>
                </div>
                <div className='hourweekly'>
                   <img src={clock} width="30" height="30" alt="Course"/>
                    <p className='hourly'>4 hours a week</p>

                </div>
            </div>

            <div className='investing'>
            <h3>Pro investing </h3>
                <div className='timeline'>
                    <img src={calendar} width="30" height="30" alt="Course"/>
                    <p className='sixweeks'>6 Weeks</p>
                </div>
                <div className='hourweekly'>
                   <img src={clock} width="30" height="30" alt="Course"/>
                    <p className='hourly'>5-12 hours a week</p>

                </div>
            </div>
          </div>
          <h2>Beginner Courses</h2>
          <h2>Intermediate Courses</h2>
          <h2>Choose your subscription plan</h2>
          <div id="subscription-plan">
                <div className="subscription-c">
                    <h4>Basic Membership</h4>
                    <p>$9.99/ month</p>
                    <p>Email support</p>
                    <button>Get Plan</button>
                </div>
                <div>
                    <h4>Advanced Membership</h4>
                    <p>$19.99/ month</p>
                    <p>Email support</p>
                    <p>Download videos</p>
                    <p>Export projects</p>
                    <p>Weekly live session</p>
                    <button>Get Plan</button>
                </div>
                <div>
                    <h4>Premium Membership</h4>
                    <p>$29.99/ month</p>
                    <p>Full support</p>
                    <p>Download videos</p>
                    <p>Export projects</p>
                    <p>Premium</p>
                    <p>Trading indicators</p>
                    <p>VIP Stream</p>
                    <button>Get Plan</button>
                </div>
            </div>
            <div>
                <h5>Learn. Trade. Invest. Play</h5>
                <p>Advance your knowledge for free through our fun, interactive courses. CryptoChuo presents the most comprehensive educational courses lineup for beginners, intermediate and advanced learners.</p>
                <div>
                    <img src="" alt="" />
                    <h3>Complete support</h3>
                    <p>Get full support</p>

                    <img src="" alt="" />
                    <h3>Earn certificate</h3>
                    <p>Claim your certificate of achievent upon completion of a course</p>

                    <img src="" alt="" />
                    <h3>One-Stop learning hub</h3>
                    <p>Join millions of learners in ou community</p>
                </div>
                <div>
                    <img src="" alt="Eth" />
                    <img src="" alt="Binance" />
                    <img src="" alt="Bybit" />
                </div>
            </div>
          <Footer />

        </div>
  
  );
};
  
export default Courses;