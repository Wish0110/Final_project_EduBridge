import React, { useState, useEffect } from 'react';


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
    <div>
      <h1>Course List</h1>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            <a href={course.href} target="_blank" rel="noopener noreferrer">
              {course.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlymouthUnivesity;