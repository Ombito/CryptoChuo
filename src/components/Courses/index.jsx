import React, { useState, useEffect } from 'react';
import "./style.css"
import { Link } from 'react-router-dom';
import calendar from "../Assets/calendar.png";
import clock from "../Assets/wall-clock.png";
import Navbar from '../Navbar/navbar.jsx';
import Footer from '../Footer/index.jsx';
import Course1 from "../Assets/homepage.jpg";
import Feature from '../Assets/Courses/bitcoinlogo.png';
import time from '../Assets/time.png';
import certificate from '../Assets/certificate.png';
import tick from '../Assets/tick.png';


const Courses = () => {
    const [activeTab, setActiveTab] = useState('allCourses');
    const [loading, setLoading] = useState(true);
    const[refresh, setRefresh]=useState(false);
    const [courses, setCourses] = useState([]);

    const showTab = (tabName) => {
        setActiveTab(tabName);
    };

    useEffect(() => {
        const apiUrl = `http://127.0.0.1:5555/courses`;
        fetch(apiUrl)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`Network response was not ok: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            setCourses(data);
            setLoading(false);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
            setLoading(false);
          });
      }, [refresh]);

    
  return (
    <div> 
      <Navbar />
    <div >       
    </div >
        <div className='courses'>
            <div class="container">
                <h2>Featured Courses</h2>
                <div className="featured-course-description">
                    <img src={Feature} alt="course" id="featured-img"/>
                    <div id="featured-div">
                        <h3>Introduction to Bitcoin</h3>
                        <p><img src={tick} alt="" height="20" width="25"/> Course Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p><img src={clock} alt="" height="30" width="35"/> 4 hours</p>
                        <p><img src={certificate} alt="" height="30" width="25"/> Earn a certificate upon completion</p>
                        <h4>$49.99</h4>
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
                    <h2 style={{"text-align": "center"}}>All Courses</h2>
                    <div id="filter">
                        <h3>Filter by</h3>
                        <input id="searchcourse"type="text" placeholder='Search for a Course...' />
                    </div>
                    <div className="allCourses-div">
                        <div id="filter-container">
                            <div className="filter-div">
                                <h4>Category</h4>
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
                            {loading ? (
                                <p className="loading">Loading...</p>
                            ) : (
                                <div id="all-courses">
                                {courses.map((course) => (
                                    <div key={course.id} className="course-card">
                                    <img src={course.image} alt="" className="course-img" />
                                    <div className="course-details">
                                        <h4>{course.title}</h4>
                                        <p>{course.description}</p>
                                        <p>Duration: {course.duration} weeks</p>
                                        <div className="amount">
                                        <h5>${course.price}</h5>
                                        <div>
                                            <p className="rating">
                                            {Array.from({ length: Math.round(course.rating) }, (_, index) => (
                                                <span key={index} className="star">&#9733;</span>
                                            ))}
                                            {Array.from({ length: 5 - Math.round(course.rating) }, (_, index) => (
                                                <span key={index} className="star">&#9734;</span>
                                            ))}
                                            </p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                ))}
                            </div>
                        )}
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

           
          </div>
          <h2 style={{"text-align": "center"}}>Choose your subscription plan</h2>
          <div id="subscription-plan">
                <div className="subscription-c">
                    <h4>Basic Membership</h4>
                    <p>$99.99/ month</p>
                    <p>Email support</p>
                    <button>Get Plan</button>
                </div>
                <div>
                    <h4>Advanced Membership</h4>
                    <p>$299.99/ month</p>
                    <p>Email support</p>
                    <p>Download videos</p>
                    <p>Export projects</p>
                    <p>Weekly live session</p>
                    <button>Get Plan</button>
                </div>
                <div>
                    <h4>Premium Membership</h4>
                    <p>$499.99/ month</p>
                    <p>Full support</p>
                    <p>Download videos</p>
                    <p>Export projects</p>
                    <p>Premium</p>
                    <p>Trading indicators</p>
                    <p>VIP Stream</p>
                    <button>Get Plan</button>
                </div>
            </div>
            <div class="container" id="learnwithus">
                <h5 style={{"text-align": "center"}}>Learn. Trade. Invest. Play</h5>
                <p style={{"text-align": "center"}}>Advance your knowledge for free through our fun, interactive courses. CryptoChuo presents the most comprehensive educational courses lineup for beginners, intermediate and advanced learners.</p>
                <div id="learnandtrade">
                    <div>
                        <img src="" alt="" />
                        <h3>Complete support</h3>
                        <p>Get full support</p>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <h3>Earn certificate</h3>
                        <p>Claim your certificate of achievent upon completion of a course</p>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <h3>One-Stop learning hub</h3>
                        <p>Join millions of learners in ou community</p>
                    </div>
                </div>
            </div>
          <Footer />

        </div>
  
  );
};
  
export default Courses;