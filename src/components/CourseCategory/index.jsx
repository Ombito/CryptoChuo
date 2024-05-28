import React from 'react';
import { useParams } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import './index.css';

const CourseCategory = ({ courses }) => {
  const { category } = useParams();

  const filteredCourses = courses.filter(course => course.category === category);

  return (
    <div class='container' id="course-category-container">
      <h2>{category} Courses</h2>
      <div className="course-list">
        {filteredCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseCategory;
