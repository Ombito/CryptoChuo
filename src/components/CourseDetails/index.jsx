import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../Footer/index.jsx';
import "./style.css"
import { FaThumbsDown, FaThumbsUp, FaCheck, FaCalendar, FaBolt, FaClock, FaCreditCard, FaList, FaHandHoldingHeart, FaBackward } from 'react-icons/fa';
import Course1 from "../Assets/homepage.jpg";
import clock from "../Assets/wall-clock.png";
import calendar from "../Assets/calendar.png";
import WhatsAppChat from '../WhatsAppChat/index.jsx';

const CourseDetails = ({ handleAddToCart, isInCart={isInCart}  }) => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const navigate = useNavigate();
  const [likeActive, setLikeActive] = useState(false);
  const [dislikeActive, setDislikeActive] = useState(false);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh]=useState(true);
  const [suggestedCourses, setSuggestedCourses] = useState([]);

  useEffect(() => {
    const apiUrl = `http://127.0.0.1:5555/courses/${id}`;
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setCourse(data);
      })
      .catch((error) => {
        console.error('Error fetching course details:', error);
      });
  }, [id]);

  if (!course) {
    return (
      <div id="courseDetailsLoading">
        <p>Loading course details...</p>
        <div class="courseDetailsloader">
          <div class="loading1"></div>
          <div class="loading2"></div>
          <div class="loading3"></div>
          <div class="loading4"></div>
          <div class="loading5"></div>
          <div class="loading6"></div>
          <div class="loading7"></div>
          <div class="loading8"></div>
          <div class="loading9"></div>
        </div>
      </div>
  );
  }

    const apiUrl = `http://127.0.0.1:5555/courses`;
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setSuggestedCourses(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  


  const handleLike = () => {
    setLikeActive(true);
    setDislikeActive(false);
  };

  const handleDislike = () => {
    setLikeActive(false);
    setDislikeActive(true);
  };

  const likeButtonClass = likeActive ? 'active' : '';
  const dislikeButtonClass = dislikeActive ? 'active' : '';

  const filterItemsByCategory = (grouping) => {
    return suggestedCourses.filter((course) => course.grouping === grouping);
  };

  return (
    <div>
      <div id="coursedetails" class="container">
        <div id="course-description">
          <img src={course.image} alt="Course" height="380" width="800"/>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          <button onClick={() => handleAddToCart(course, true)} className={isInCart ? 'addedToCart' : "enroll-btn"}>{isInCart ? "Added to Cart" : "Enroll Now"}</button>
        </div>
        <div className="courseDetails-div">
          <div className="courseDetailsCard">
            <h5>Program Info</h5>
            <p><FaCalendar className="checkicon"/> Rolling Enrollment </p>
            <p><FaBolt className="checkicon"/> Level: {course.level}</p>
            <p><FaList className="checkicon"/> Category: {course.category}</p>
            <p><FaClock className="checkicon"/> Duration: {course.duration}</p>
            <p><FaCreditCard className="checkicon"/> Tuition: ${course.price}</p>
            <p><FaHandHoldingHeart  className="checkicon"/> Lifetime Full Access</p>
            <button className={isInCart ? 'addedToCart' : "enroll-btn"} onClick={() => handleAddToCart(course, true)}>{isInCart ? "Added to Cart" : "Enroll Now"}</button>
          </div>
          <div className="courseDetailsCard">
            <h5>Additional Information</h5>
            <p><FaCheck className="checkicon"/> Module Quizzes and Knowledge Checks</p>
            <p><FaCheck className="checkicon"/> LIVE Online Instructor</p>
            <p><FaCheck className="checkicon"/> Student Orientation</p>
            <p><FaCheck className="checkicon"/> Certificate Upon Completion</p>
            <h6><FaCheck className="checkicon"/> 2 Exam Voucher</h6>
            <p>The content addressed in this course contributes to <span>100% of the Focus areas </span>outlined in the Exam Competencies by the Web3 Certification Association (W3CB).</p>
          </div>
        </div>
      </div>
      <div id="upcoming-live">
        <h3>Upcoming LIVE Instruction Dates</h3>
        <p>There are no upcoming events.</p>
      </div>
      <div id="feedback-hero">
        <h2>Feedback</h2>
        <p>Was this page useful?</p>
        <div id="feedback-btns">
          <button onClick={handleLike} className={`like-button ${likeButtonClass}`}><FaThumbsUp /> Yes </button>
          <button onClick={handleDislike} className={`like-button ${dislikeButtonClass}`}><FaThumbsDown /> No</button>
        </div>
      </div>
      <div class="container" id="suggestion">
        <h3>You may also like</h3>
        <div className="suggested-div">
          {filterItemsByCategory('suggested').map((course) => (
            <div key={course.id} className="course-card" onClick={() => navigate(`/courses/${course.id}`)}>
              <img src={course.image} alt="Course" className="course-img" />
              <div className="course-details">
                <h4>{course.title}</h4>
                <p>{course.description}</p>
                <p>Duration: {course.duration}</p>
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
      </div>
      <WhatsAppChat />
    </div>
  );
};

export default CourseDetails;