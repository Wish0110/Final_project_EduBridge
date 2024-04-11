import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CourseDetailsPU.css';
import { useNavigate } from "react-router-dom";

function CourseDetailsPU() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedSec, setExpandedSec] = useState(false); //div expand

  
  const navigate = useNavigate();

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

  //div handling
  const handleExpandSec = () => {
    setExpandedSec(!expandedSec);
  };

  return (
    <div>
      <h2>{data.courseTitle}</h2>
      <h3>{data.schoolTitle}</h3>
      <p className="course-overview-text">{data.overviewText}</p>

      <div className='Expand-Sec' onClick={handleExpandSec}>
      <h3>{data.careerTopic}</h3>
        {expandedSec && (
        <>
          <p>{data.careerDescript}</p>
        </>
          )}
      </div>

      <div className='Expand-Sec' onClick={handleExpandSec}>
      <h3>{data.keyFeaturesTopic}</h3>
        {expandedSec && (
        <>
        <ul>
          {data.keyFeaturesList.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        </>
          )}
      </div>

     <div className='Expand-Sec' onClick={handleExpandSec}>
     <h3>{data.courseDetails}</h3>
      {expandedSec && (
      <>
        <h4>{data.courseMain}</h4>
        <ul>
          {data.ulElement3.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </>
    )}
    </div>

    <div className='Expand-Sec' onClick={handleExpandSec}>
    <h3>{data.entryreqTopic}</h3>
    {expandedSec && (
          <>
        <p>{data.entryreq}</p>
        <p>{data.entryreqdetails}</p>
        </>
      )}
      </div>
      
      <div className='Expand-Sec' onClick={handleExpandSec}>
        <h3>{data.feesTopic}</h3>
        {expandedSec && (
          <>
            <p>{data.feesDetails}</p>
            <p>{data.feesDetailsextra}</p>
            <p>{data.feesDetailsadd}</p>
            <p>{data.feesDetailsaddDetails}</p>
          </>
        )}
      </div>

      <div className='Expand-Sec' onClick={handleExpandSec}>
      <h3>{data.applytopic}</h3>
      {expandedSec && (
          <>
      <p>{data.applydetails}</p>
      </>
        )}
      </div>

      <div className='Expand-Sec' onClick={handleExpandSec}>
      <h3>{data.careerTopic}</h3>
      {expandedSec && (
          <>
      <ul>
        {data.careers.map((career, index) => (
          <li key={index}>{career}</li>
        ))}
      </ul>
      </>
        )}
      </div>

      <button onClick={() => navigate("/ApplicationOverview")}>Apply Now</button>
    </div>
  );
}

export default CourseDetailsPU;