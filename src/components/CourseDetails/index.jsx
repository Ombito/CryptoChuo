import React from 'react';
import Navbar from '../Navbar/navbar.jsx';

const CourseDetails = ({ course }) => {
    return (
        <div>
            <Navbar />
            <div>
                <h2>{course.title}</h2>
                <p>{course.description}</p>
                <p>Duration: {course.duration} weeks</p>
                <p>Price: ${course.price}</p>
            </div>
        </div>
    );
  };

export default CourseDetails;
