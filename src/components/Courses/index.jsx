import React, { useState, useEffect } from 'react';
import "./style.css"
import calendar from "../Assets/calendar.png";
import clock from "../Assets/wall-clock.png";
import Footer from '../Footer/index.jsx';
import Course1 from "../Assets/homepage.jpg";
import Feature from '../Assets/Courses/bitcoinlogo.png';
import Support from '../Assets/support.jpg';
import certificate from '../Assets/certificate.png';
import Cert from '../Assets/cert.jpg';
import tick from '../Assets/tick.png';
import { useNavigate } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import WhatsAppChat from '../WhatsAppChat/index.jsx';
import CourseCard from '../CourseCard/CourseCard';

const Courses = ({ courses, handleAddToCart, isInCart }) => {
    const [activeTab, setActiveTab] = useState ('allCourses');
    const [loading, setLoading] = useState(true);
    const [refresh, setRefresh]=useState(true);;
    const navigate = useNavigate();
    
    const [searchQuery, setSearchQuery] = useState('');
    const [categoryFilters, setCategoryFilters] = useState({});
    const [levelFilters, setLevelFilters] = useState({});
    const [durationFilters, setDurationFilters] = useState({});
    const [filterVisible, setFilterVisible] = useState(true);



    const showTab = (tabName) => {
        setActiveTab(tabName);
    };


    const handleCategoryFilter = (category) => {
        setCategoryFilters((prevFilters) => ({
            ...prevFilters,
            [category]: !prevFilters[category],
        }));
        setRefresh();
    };

    const handleLevelFilter = (level) => {
        setLevelFilters((prevFilters) => ({
            ...prevFilters,
            [level]: !prevFilters[level],
        }));
        setRefresh();
    };

    const handleDurationFilter = (duration) => {
        setDurationFilters((prevFilters) => ({
            ...prevFilters,
            [duration]: !prevFilters[duration],
        }));
        setRefresh();
    };
    
    const applyFilters = (course) => {
        const lowerCaseSearchQuery = searchQuery.toLowerCase();
        if (lowerCaseSearchQuery && !course.title.toLowerCase().includes(lowerCaseSearchQuery)) {
          return false;
        }
      
        if (Object.keys(categoryFilters).length > 0) {
          const courseCategories = course.category || [];
          const checkedCategories = Object.keys(categoryFilters).filter(category => categoryFilters[category]);
          if (checkedCategories.length > 0 && !checkedCategories.includes(courseCategories)) {
            return false;
          }
        }
      
        if (Object.keys(levelFilters).length > 0) {
          const courseLevels = course.level || '';
          const checkedLevels = Object.keys(levelFilters).filter(level => levelFilters[level]);
          if (checkedLevels.length > 0 && !checkedLevels.includes(courseLevels)) {
            return false;
          }
        }
      
        if (Object.keys(durationFilters).length > 0) {
          const courseDuration = course.duration || '';
          const checkedDurations = Object.keys(durationFilters).filter(duration => durationFilters[duration]);
          if (checkedDurations.length > 0 && !checkedDurations.some(duration => courseDuration.includes(duration))) {
            return false;
          }
        }
      
        return true;
      };

    const toggleFilterVisibility = () => {
        setFilterVisible(!filterVisible);
    };

    const filterItemsByCategory = (grouping) => {
        return courses.filter(item => item.grouping === grouping);
      };
    
  return (
    <div> 
        <div className='courses'>
            <div>
                <h2>Featured Course</h2>
                {filterItemsByCategory('featured').slice(0, 1).map(course => (
                    <div className="featured-course-description" key={course.id} onClick={() => navigate(`/course-details/${course.id}`)}>
                        <img src={Feature} alt="course" id="featured-img" />
                        <div id="featured-div">
                            <h3>{course.title}</h3>
                            <p className="featured-description"><img src={tick} alt="" height="20" width="25"/> {course.description}</p>
                            <p><img src={clock} alt="" height="30" width="35"/> {course.duration}</p>
                            <p><img src={certificate} alt="" height="30" width="25"/> Earn a certificate upon completion</p>
                            <h4>${course.price}</h4>
                            <button onClick={(e) => { e.stopPropagation(); handleAddToCart(course, true)}} className={isInCart ? 'addedToCart' : "enroll-btn"}>{isInCart ? "Added to Cart" : "Enroll Course"}</button>
                        </div>                  
                    </div>
                ))}
            </div>
            <div className='tabs-container'>
                <p className={`tab ${activeTab === 'allCourses' ? 'active' : ''}`} onClick={() => showTab('allCourses')}>All Courses</p>
                <p className={`tab ${activeTab === 'inProgress' ? 'active' : ''}`} onClick={() => showTab('inProgress')}>In Progress</p>
                <p className={`tab ${activeTab === 'completed' ? 'active' : ''}`} onClick={() => showTab('completed')}>Completed</p>
            </div>
            <div>
                <div className={`tab-content ${activeTab === 'allCourses' ? 'active' : ''}`} id='allCoursesContent'>
                    <h2 style={{"text-align": "center"}}>All Courses</h2>
                    <div id="filter" className={filterVisible ? 'filter-visible' : ''}>
                        <button id="toggleFilter" onClick={toggleFilterVisibility}><i className="fa fa-filter"> </i>
                             {filterVisible ? 'Filters' : 'Filters'}
                        </button>
                        <div className='categorySearchInput'>
                            <h4>Category</h4>
                            <input id="searchcourse"type="text" placeholder='Search for a Course...' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                        </div>              
                    </div>
                    <div className="allCourses-div">
                        {filterVisible && (
                        <div id="filter-container">
                            <div className="filter-div">
                                {['Technology', 'Programming', 'Finance', 'Smart Contracts', 'Business', 'Art', 'Social Impact', 'Health'].map((category) => (
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
                                {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
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
                                {['4 hours', '8 hours', '24 hours', '1 week', '3 months'].map((duration) => (
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
                        )}
                        <div id="course-hero">
                                <div id="all-courses">
                                    {courses
                                        .filter(applyFilters)
                                        .map((course) => (                                
                                            <CourseCard key={course.id} course={course} />
                                    ))}
                            </div>
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
        <div id="membership-div">
            <h2 style={{"text-align": "center"}}>Choose Your Subscription Plan</h2>
            <div id="membership-plan">
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
            <div id="learnwithus">
                <h5 style={{"text-align": "center"}}>Learn. Trade. Invest. Play</h5>
                <p className="learn-headline">CryptoChuo presents the most comprehensive educational courses lineup for beginners, intermediate and advanced learners.</p>
                <div id="learnandtrade">
                    <div className="learn-cards card1">
                        <h3>Complete support</h3>
                        <p>Get full support</p>
                    </div>
                    <div className="learn-cards card2">
                        <h3>Earn certificate</h3>
                        <p>Claim your certificate of achievent upon completion of a course</p>
                    </div>
                    <div className="learn-cards card3">
                        <h3>One-Stop learning hub</h3>
                        <p>Join millions of learners in ou community</p>
                    </div>
                </div>
            </div>
            <WhatsAppChat />
        </div>
  
  );
};
  
export default Courses;