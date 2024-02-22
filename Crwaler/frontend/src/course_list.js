import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyComponent() {
  const [courseTitles, setCourseTitles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/crawled_data1');
        const data = response.data[0]; // Assuming an array containing the object
        setCourseTitles(data.courseTitle.split(/,/)); // Split by comma separator
      } catch (error) {
        setError(error.message || 'An error occurred while fetching data.');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {courseTitles.map((title, index) => (
            <li key={index}>{title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MyComponent;
