import React from 'react';
import { useParams } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import './index.css';

const CourseCategory = ({ courses }) => {
  const { category } = useParams();

  const filteredCourses = courses.filter(course => course.category === category);
  
  if (!filteredCourses) {
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
