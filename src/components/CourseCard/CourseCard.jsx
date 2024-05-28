import React from 'react';
import './card.css';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const navigate = useNavigate();

    return (
        <div className="course-card" key={course.id} onClick={() => navigate(`/course-details/${course.id}`)}>
            <img src={course.image} alt="" className="course-img"/>
            <div className="course-details">
                <h5>{course.title}</h5>
                <p className="course-description">{course.description}</p>
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
    )
}
export default CourseCard;
