import React, { useState, useEffect } from 'react';
import "./style.css"
import calendar from "../Assets/calendar.png";
import clock from "../Assets/wall-clock.png";
import Navbar from '../Navbar/navbar.jsx';
import Footer from '../Footer/index.jsx';
import Course1 from "../Assets/homepage.jpg";
import Feature from '../Assets/Courses/bitcoinlogo.png';
import time from '../Assets/time.png';
import certificate from '../Assets/certificate.png';
import tick from '../Assets/tick.png';
import { useNavigate } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';


const Courses = () => {
    const [activeTab, setActiveTab] = useState('allCourses');
    const [loading, setLoading] = useState(true);
    const [refresh, setRefresh]=useState(false);
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();

    const [categoryFilters, setCategoryFilters] = useState({});
    const [levelFilters, setLevelFilters] = useState({});
    const [durationFilters, setDurationFilters] = useState({});

    const showTab = (tabName) => {
        setActiveTab(tabName);
    };

    useEffect(() => {
        if (refresh) {
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
            setRefresh(false); 
        }
      }, [refresh]);

      const handleCategoryFilter = (category) => {
        setCategoryFilters((prevFilters) => ({
            ...prevFilters,
            [category]: !prevFilters[category],
        }));
        setRefresh(true);
    };

    const handleLevelFilter = (level) => {
        setLevelFilters((prevFilters) => ({
            ...prevFilters,
            [level]: !prevFilters[level],
        }));
        setRefresh(true);
    };

    const handleDurationFilter = (duration) => {
        setDurationFilters((prevFilters) => ({
            ...prevFilters,
            [duration]: !prevFilters[duration],
        }));
        setRefresh(true);
    };


    
    const applyFilters = (course) => {
        // Filter by search
        const searchQuery = document.getElementById('searchcourse').value.toLowerCase();
        if (searchQuery && !course.title.toLowerCase().includes(searchQuery)) {
            return false;
        }
    
        // Filter by category
        if (Object.keys(categoryFilters).length > 0) {
            const courseCategories = course.category || [];
            if (!Object.keys(categoryFilters).every(category => courseCategories.includes(category))) {
                return false;
            }
        }
    
        // Filter by level
        if (Object.keys(levelFilters).length > 0 && !levelFilters[course.level]) {
            return false;
        }
    
        // Filter by duration
        if (Object.keys(durationFilters).length > 0) {
            const courseDuration = course.duration || '';
            if (!Object.keys(durationFilters).some(duration => courseDuration.includes(duration))) {
                return false;
            }
        }
    
        return true;
    };
    


  return (
    <div> 
      <Navbar />
    <div >       
    </div >
        <div className='courses'>
            <div class="container">
                <h2>Featured Courses</h2>
                <div className="featured-course-description">
                    <img src={Feature} alt="course" id="featured-img" />
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
                            {['Technology', 'Programming', 'Web3', 'Smart Contracts', 'NFTs'].map((category) => (
                                <div key={category} className="checkbox-container">
                                    <input
                                        type="checkbox"
                                        checked={categoryFilters[category] || false}
                                        onChange={() => handleCategoryFilter(category)}
                                    />
                                    <label>{category}</label>
                                </div>
                            ))}
                        </div>
                        <div className="filter-div">
                            <h4>Level</h4>
                            {['Beginner', 'Intermediate', 'Advanced', 'Pro'].map((level) => (
                                <div key={level} className="checkbox-container">
                                    <input
                                        type="checkbox"
                                        checked={levelFilters[level] || false}
                                        onChange={() => handleLevelFilter(level)}
                                    />
                                    <label>{level}</label>
                                </div>
                            ))}
                        </div>
                        <div className="filter-div">
                            <h4>Duration</h4>
                            {['Less than 4 Hours', '1 - 4 Weeks', '1 - 3 Months', '3 - 6 Months'].map((duration) => (
                                <div key={duration} className="checkbox-container">
                                    <input
                                        type="checkbox"
                                        checked={durationFilters[duration] || false}
                                        onChange={() => handleDurationFilter(duration)}
                                    />
                                    <label>{duration}</label>
                                </div>
                            ))}
                        </div>
                        </div>
                        <div id="course-hero">
                            {loading ? (
                                <p className="loading">Loading courses...</p>
                            ) : (
                                <div id="all-courses">
                                {courses
                                    .filter(applyFilters)
                                    .map((course) => (                                
                                    <div key={course.id} className="course-card" onClick={() => navigate(`/courses/${course.id}`)}>
                                        <img src={course.image} alt="Course" className="course-img" />
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
                    <p>Looks like you haven't registered for a course yet! Browse our selection of courses and enroll in one to get started.</p>
                </div>

                <div className={`tab-content ${activeTab === 'completed' ? 'active' : ''}`} id='completedContent'>
                    <h2>Completed</h2>
                    <p>You haven't completed any courses yet enroll in a course and start learning today! </p>
                </div>
            </div>

           
          </div>
          <div id="subscription-div">
            <h2 id="subscribe" style={{"text-align": "center"}}>Choose Your Subscription Plan</h2>
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