import React, { useState, useEffect } from 'react';


const About = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3001/links');
      const data = await response.json();
      setCourses(data);
    };

    fetchData();
  }, []);

  // ... rest of the code

  return (
    <div>
      <h1>About Us</h1>
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

export default About;