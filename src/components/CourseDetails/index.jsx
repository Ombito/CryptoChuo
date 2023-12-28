import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../Navbar/navbar.jsx';
import Footer from '../Footer/index.jsx';
import "./style.css"


const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const navigate = useNavigate();

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

  return (
    <div>
      <Navbar />
      <div id="coursedetails" class="container">
        <button>Back</button>
        <img src={course.image} alt="Course" />
        <h2>{course.title}</h2>
        <p>{course.description}</p>
        <p>Level: {course.level}</p>
        <p>Category: {course.category}</p>
        <p>Duration: {course.duration}</p>
        <p>Price: ${course.price}</p>
      </div>
      <div>
        <h2>Feedback</h2>
        <p>Was this page useful?</p>
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetails;