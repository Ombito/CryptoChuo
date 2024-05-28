import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../Footer/index.jsx';
import CourseCard from '../CourseCard/CourseCard';
import "./style.css"
import { FaThumbsDown, FaThumbsUp, FaCheck, FaCalendar, FaBolt, FaClock, FaCreditCard, FaList, FaHandHoldingHeart, FaBackward } from 'react-icons/fa';
import Course1 from "../Assets/homepage.jpg";
import clock from "../Assets/wall-clock.png";
import calendar from "../Assets/calendar.png";
import WhatsAppChat from '../WhatsAppChat/index.jsx';

const CourseDetails = ({ courses, handleAddToCart, isInCart }) => {
  const { id } = useParams();
  const [likeActive, setLikeActive] = useState(false);
  const [dislikeActive, setDislikeActive] = useState(false);

  const course = courses.find(course => course.id === parseInt(id));
  const suggestedCourses = courses.filter(course => course.grouping === 'suggested');

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

  return (
    <div id="course">
      <div id="coursedetails" class="container">
        <div id="course-description">
          <img src={course.image} alt="Course" height="380" width="800"/>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          <button onClick={() => handleAddToCart(course, true)} className={isInCart ? 'addedToCart' : "enroll-btn"}>{isInCart ? "Added to Cart" : "Enroll Course"}</button>
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
            <button className={isInCart ? 'addedToCart' : "enroll-btn"} onClick={() => handleAddToCart(course, true)}>{isInCart ? "Added to Cart" : "Enroll Course"}</button>
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
          {suggestedCourses.slice(0, 4).map((suggestedCourse) => (
            <CourseCard key={suggestedCourse.id} course={suggestedCourse} />
          ))}
        </div>
      </div>
      <WhatsAppChat />
    </div>
  );
};

export default CourseDetails;