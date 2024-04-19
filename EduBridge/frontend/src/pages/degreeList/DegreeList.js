import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './DegreeList.css';

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
    <div className="degree-list">
      <h1 className="degree-title">Degree List</h1>
      {isLoading && <p className="loading">Loading Degree...</p>}
      {error && <p className="error">Error: {error}</p>}
      {courses.length > 0 && (
        <ul className="degree-list-items">
          {courses.map((course, index) => (
            <li key={index} className="degree-item">
              {course.title === 'MSc Artificial Intelligence' ? (

              <Link to="/CourseDetailsPU">
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
      )}
    </div>
  );
}

export default DegreeList;
