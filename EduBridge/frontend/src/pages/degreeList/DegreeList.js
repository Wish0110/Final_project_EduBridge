import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function DegreeList() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch('http://localhost:3003/DegreeLinks');
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
      <h1>Degree List</h1>
      {isLoading && <p>Loading Degree...</p>}
      {error && <p>Error: {error}</p>}
      {courses.length > 0 && (
        <ul>
          {courses.map((course, index) => (
            <li key={index}>
              {course.title === 'MSc Artificial Intelligence' ? (

              <Link to="/CourseDetailsPU">
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
      )}
    </div>
  );
}

export default DegreeList;
