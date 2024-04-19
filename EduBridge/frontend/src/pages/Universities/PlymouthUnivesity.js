import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PlymouthUnivesity.css';
//import CourseLink from './CourseLink';

const PlymouthUnivesity = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3001/links');
      const data = await response.json();
      setCourses(data);
    };

    fetchData();
  }, []);

  return (
    <div className="degree-list">
      <h1 className="degree-title">Course List</h1>
      <ul className="degree-list-items">
        {courses.map((course, index) => (
          <li key={index} className="degree-item">
            {course.title === 'Computing' ? (

              <Link to="/DegreeList">
                <a href={course.href} target="_blank" rel="noopener noreferrer" className="degree-link">
                  {course.title}
                </a>
              </Link>
            ) : (
              <a href={course.href} target="_blank" rel="noopener noreferrer" className="degree-link">
                {course.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlymouthUnivesity;