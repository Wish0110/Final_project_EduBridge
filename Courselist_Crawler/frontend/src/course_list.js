import React, { useState, useEffect } from 'react';

function CourseList() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch('http://localhost:3001/crawled_data1');
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Course List</h1>
      {isLoading && <p>Loading courses...</p>}
      {error && <p>Error: {error}</p>}
      {courses.length > 0 && (
        <ul>
          {courses.map((course, index) => (
            <li key={index}>{course.courseTitle}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CourseList;
