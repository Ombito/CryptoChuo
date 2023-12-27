import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../Navbar/navbar.jsx';
import Footer from '../Footer/index.jsx';

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
    return <p>Loading course details...</p>;
  }

  return (
    <div>
      <Navbar />
      <div>
        <h2>{course.title}</h2>
        <p>{course.description}</p>
        <p>Duration: {course.duration}</p>
        <p>Price: ${course.price}</p>
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetails;