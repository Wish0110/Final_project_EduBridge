import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PlymouthUniversity.css';
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
            <img src="https://d3bpgcke55gfwt.cloudfront.net/assets/uoplogomono-c97c99e65962b59f3d62b73f869b9c0734247dd78a11ba00dc856f675f29e108.svg" alt="University of Plymouth" className="degree-logo" />
            <div className="degree-separator-full">
        <input type="text" className="search-bar" placeholder="Search..." />
        <button id="back" className="button">Back</button>
        <button id="Home"className="button">Home</button>
      </div>      
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