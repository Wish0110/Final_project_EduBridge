import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CourseDetailsPU.css';
import { useNavigate } from "react-router-dom";
import { faArrowLeft, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useNavigation from '../../Componenets/Navbar/useNavigation';

function CourseDetailsPU() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedSec, setExpandedSec] = useState({}); //div expand
  const { goBack } = useNavigation();
  
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
  const handleExpandSec = (section) => {
    setExpandedSec(prevExpandedSec => ({
      ...prevExpandedSec,
      [section]: !prevExpandedSec[section],
    }));
  };

  return (

    <div>
      <img src="https://d3bpgcke55gfwt.cloudfront.net/assets/uoplogomono-c97c99e65962b59f3d62b73f869b9c0734247dd78a11ba00dc856f675f29e108.svg" alt="University of Plymouth" className="degree-logo" />
        <div className="degree-separator-full">
        <button id="back" className="button" onClick={goBack}>
              <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h2 style={{ color: '#4da8e1' }}>{data.courseTitle}</h2>
        <button id="Home" className="button">
          <FontAwesomeIcon icon={faHome} />
        </button>
      </div> 

      
      <p className="course-overview-text">{data.overviewText}</p>

      {/*career list*/}
      <div className="Expand-Sec" onClick={() => handleExpandSec("career")}>
      <h3>{data.careerTopic}</h3>
      {expandedSec.career && (
        <div className="career-description">
          <ul>
            {data.careerDescript.split("\n").map((jobTitle, index) => (
              <li style={{ listStyleType: "disc" }} key={index}>{jobTitle}</li>
            ))}
          </ul>
        </div>
      )}
    </div>

      {/*key Features*/}
      <div className="Expand-Sec" onClick={() => handleExpandSec("keyFeatures")}>
      <h3>{data.keyFeaturesTopic}</h3>
      {expandedSec.keyFeatures && (
        <ul>
          {data.keyFeaturesList.map((feature, index) => (
            <li style={{ listStyleType: "disc" }} key={index} dangerouslySetInnerHTML={{ __html: feature }} />
          ))}
        </ul>
      )}
    </div>

     {/*courseDetails*/}
     <div className='Expand-Sec' onClick={() => handleExpandSec('courseDetails')}>
        <h3>{data.courseDetails}</h3>
        {expandedSec.courseDetails && (
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

    {/*entryreqTopic*/}
    <div className='Expand-Sec' onClick={() => handleExpandSec('entryreq')}>
    <h3>{data.entryreqTopic}</h3>
    {expandedSec.entryreq && (
          <>
        <p>{data.entryreq}</p>
        <p>{data.entryreqdetails}</p>
        </>
      )}
      </div>
      
      <div className='Expand-Sec' onClick={() => handleExpandSec('fees')}>
        <h3>{data.feesTopic}</h3>
        {expandedSec.fees && (
          <>
            <p>{data.feesDetails}</p>
            <p>{data.feesDetailsextra}</p>
            <p>{data.feesDetailsadd}</p>
            <p>{data.feesDetailssummary}</p>
          </>
        )}
      </div>

      <div className='Expand-Sec' onClick={() =>handleExpandSec('apply')}>
      <h3>{data.applytopic}</h3>
      {expandedSec.apply && (
          <>
      <p>{data.applydetails}</p>
      </>
        )}
      </div>

      <div className='Expand-Sec' onClick={() =>handleExpandSec('careers')}>
      <h3>{data.careerTopic}</h3>
      {expandedSec.careers && (
          <>
      <ul>
        {data.careers.map((career, index) => (
          <li key={index}>{career}</li>
        ))}
      </ul>
      </>
        )}
      </div>

      <button className="btnApply" onClick={() => navigate("/IsIntegrated")}>Apply Now</button>
    </div>
  );
}

export default CourseDetailsPU;