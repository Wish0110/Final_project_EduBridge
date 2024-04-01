import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DegreeList = () => {
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
    <div>
      <h1>Course List</h1>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            {course.title === 'Computing' ? (

              <Link to="/computing-details">
                <a href={course.href} target="_blank" rel="noopener noreferrer">
                  {course.title}
                </a>
              </Link>
            ) : (
              <a href={course.href} target="_blank" rel="noopener noreferrer">
                {course.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DegreeList;