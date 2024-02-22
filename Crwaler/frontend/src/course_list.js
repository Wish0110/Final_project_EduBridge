import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Or another data fetching library
import { preprocessData } from './utils'; // Import preprocessData function from the appropriate module

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/crawled_data1'); // Adjust URL if needed
        const processedData = preprocessData(response.data); // Call preprocessData function
        setCourses(processedData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false); // Set loading state to false after fetch
      }
    };

    fetchData();
  }, []);

  const renderCourses = () => {
    if (error) {
      return <p>Error fetching data: {error.message}</p>;
    } else if (loading) {
      return <p>Loading courses...</p>; // Loading indicator
    } else {
      return (
        <ul>
          {courses.map((course) => (
            <li key={course.courseTitle}>
              {/* Render course details based on desired presentation */}
              <h3>{course.courseTitle}</h3>
              {/* Additional course details, actions, etc. */}
            </li>
          ))}
        </ul>
      );
    }
  };

  return (
    <div>
      <h2>Courses</h2>
      {renderCourses()}
    </div>
  );
};

export default CourseList;
