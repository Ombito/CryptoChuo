import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../Navbar/navbar.jsx';
import Footer from '../Footer/index.jsx';
import "./style.css"
import { FaThumbsDown, FaThumbsUp, FaCheck } from 'react-icons/fa';
import Course1 from "../Assets/homepage.jpg";


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
          <button>Back</button>
          <img src={Course1} alt="Course" height="350" width="700"/>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          <h3>Upcoming LIVE Instruction Dates</h3>
          <p>There are no upcoming events.</p>
          <button>Enroll Now</button>
        </div>
        <div className="courseDetails-div">
          <div className="courseDetailsCard">
            <h5>Program Info</h5>
            <p>Level: {course.level}</p>
            <p>Category: {course.category}</p>
            <p>Duration: {course.duration}</p>
            <p>Tuition: ${course.price}</p>
            <p>Tuition Assistance</p>
            <button>Enroll Now</button>
          </div>
          <div className="courseDetailsCard">
            <h5>Additional Information</h5>
            <p><FaCheck className="checkicon"/> Module Quizzes and Knowledge Checks</p>
            <p><FaCheck className="checkicon"/> LIVE Online Instructor</p>
            <p><FaCheck className="checkicon"/> Student Orientation</p>
            <p><FaCheck className="checkicon"/> LIVE Workshops</p>
            <h6><FaCheck className="checkicon"/> 2 Exam Voucher</h6>
            <p>The content addressed in this course contributes to <span>100% of the Focus areas </span>outlined in the Exam Competencies by the Web3 Certification Association (W3CB).</p>
          </div>
        </div>
      </div>
      <div>
        <h2>Feedback</h2>
        <p>Was this page useful?</p>
        <button onClick={handleLike} className={`like-button ${likeButtonClass}`}><FaThumbsUp /> Yes </button>
        <button onClick={handleDislike} className={`like-button ${dislikeButtonClass}`}><FaThumbsDown /> No</button>
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetails;