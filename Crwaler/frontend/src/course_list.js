import React, { useState, useEffect } from 'react';

function CourseList() {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/crawled_data1');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!courses.length) {
    return <div>Loading courses...</div>;
  }

  return (
    <div>
      <h1>Crawled Courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.courseTitle}>{course.courseTitle}</li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
