import React, { useState, useEffect } from 'react';

const CourseLink = ({ href, title }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setData(null);
      setError(null);

      try {
        const response = await fetch(href);
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [href]);

  if (isLoading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return <p>No data available</p>;
  }

  return (
    <div>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
      {data.courseTitle && (
        <>
          <h2>{data.courseTitle}</h2>
          <h3>{data.schoolTitle}</h3>
          <p>{data.overviewText}</p>
          {/* Display other details as needed */}
        </>
      )}
    </div>
  );
};

export default CourseLink;