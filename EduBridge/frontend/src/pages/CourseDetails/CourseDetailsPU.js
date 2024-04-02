import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CourseDetailsPU.css';

function CourseDetailsPU() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setData(null);
      setError(null);

      try {
        const response = await axios.get('http://localhost:3002/crawled_data');
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

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
      <h2>{data.courseTitle}</h2>
      <h3>{data.schoolTitle}</h3>
      <p>{data.overviewText}</p>
      <h4>{data.careerTopic}</h4>
      <p>{data.careerDescript}</p>
      <h4>{data.keyFeaturesTopic}</h4>
      <ul>
        {data.keyFeaturesList.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <h4>{data.courseMain}</h4>
      <ul>
        {data.ulElement3.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h4>{data.entryreqTopic}</h4>
      <p>{data.entryreq}</p>
      <p>{data.entryreqdetails}</p>
      <h4>{data.feesTopic}</h4>
      <p>{data.feesDetails}</p>
      <p>{data.feesDetailsextra}</p>
      <p>{data.feesDetailsadd}</p>
      <p>{data.feesDetailsaddDetails}</p>
      <h4>{data.applytopic}</h4>
      <p>{data.applydetails}</p>
      <h4>{data.careerTopic}</h4>
      <ul>
        {data.careers.map((career, index) => (
          <li key={index}>{career}</li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetailsPU;