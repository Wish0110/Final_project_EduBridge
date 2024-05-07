import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './DegreeList.css';
import { faArrowLeft, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useNavigation from '../../Componenets/Navbar/useNavigation';

function DegreeList() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { goBack } = useNavigation();

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
      <img src="https://d3bpgcke55gfwt.cloudfront.net/assets/uoplogomono-c97c99e65962b59f3d62b73f869b9c0734247dd78a11ba00dc856f675f29e108.svg" alt="University of Plymouth" className="degree-logo" />
      <div className="degree-separator-full">
        <button id="back" className="button" onClick={goBack}>
              <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <input type="text" className="searchbar" placeholder="Search..." />
        <button id="Home" className="button">
          <FontAwesomeIcon icon={faHome} />
        </button>
      </div>            
      <h1 className="degree-title">Degree List</h1>
      {isLoading && <p className="loading">Loading Degree...</p>}
      {error && <p className="error">Error: {error}</p>}
      {courses.length > 0 && (
        <ul className="degree-list-items">
          {courses.map((course, index) => (
            <li key={index} className="degree-item">
              {course.title === 'BSc (Hons) Computer Science (Artificial Intelligence)' ? (

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
