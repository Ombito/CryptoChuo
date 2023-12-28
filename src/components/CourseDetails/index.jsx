import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../Navbar/navbar.jsx';
import Footer from '../Footer/index.jsx';
import "./style.css"
import { FaThumbsDown, FaThumbsUp, FaCheck, FaCalendar, FaBolt, FaClock, FaCreditCard, FaList, FaHandHoldingHeart, FaBackward } from 'react-icons/fa';
import Course1 from "../Assets/homepage.jpg";
import clock from "../Assets/wall-clock.png";
import calendar from "../Assets/calendar.png";


const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const navigate = useNavigate();
  const [likeActive, setLikeActive] = useState(false);
  const [dislikeActive, setDislikeActive] = useState(false);

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
    return <div id="loading">
      <Navbar />
      <p>Loading course details...</p>
      <Footer />
    </div>;
  }


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


  return (
    <div>
      <Navbar />
      <div id="coursedetails" class="container">
        <div id="course-description">
          <img src={Course1} alt="Course" height="380" width="800"/>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          <button id="enroll-btn">Enroll Now</button>
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
            <button>Enroll Now</button>
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
      <Footer />
    </div>
  );
};

export default CourseDetails;