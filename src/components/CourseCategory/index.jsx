import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard.jsx';

const CourseCategory = () => {
    const { category } = useParams();
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:5555/courses?category=${category}`);
                const data = await response.json();
                setCourses(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching courses:', error);
                setLoading(false);
            }
        };

        fetchCourses();
    }, [category]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Courses in {category}</h2>
            <div className="course-list">
                {courses.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
};

export default CourseCategory;
