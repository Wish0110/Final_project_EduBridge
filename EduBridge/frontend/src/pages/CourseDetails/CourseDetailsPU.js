import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CourseDetailsPU.css';
import { Configuration, OpenAIApi } from 'openai';
import { useNavigate } from "react-router-dom";

const API_KEY = "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";


function CourseDetailsPU() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedSec, setExpandedSec] = useState({}); //div expand
  const [summary, setSummary] = useState(null);

  const configuration = new Configuration({
    apiKey: API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setData(null);
      setError(null);
  
      try {
        const response = await axios.get('http://localhost:3002/crawled_data');
        setData(response.data);
  
        // Summarize the course details using the OpenAI API
        const summary = await openai.createCompletion({
          model: 'text-davinci-003',
          prompt: `Summarize the following course details in 150 words or less:
  
  ${response.data.overviewText}
  ${response.data.careerDescript}
  ${response.data.keyFeaturesList.join('\n')}
  ${response.data.courseDetails}
  ${response.data.entryreq}
  ${response.data.entryreqdetails}
  ${response.data.feesDetails}
  ${response.data.feesDetailsextra}
  ${response.data.feesDetailsadd}
  ${response.data.feesDetailssummary}
  ${response.data.applydetails}
  ${response.data.careers.join('\n')}`,
          temperature: 0.5,
          max_tokens: 150,
          top_p: 1.0,
          frequency_penalty: 0.0,
          presence_penalty: 0.0,
        });
  
        setSummary(summary.data.choices[0].text.trim());
  
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchData();
  }, [openai]);

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
      <h2>{data.courseTitle}</h2>
      <h3>{data.schoolTitle}</h3>
      <p className="course-overview-text">{data.overviewText}</p>

      <div className='Expand-Sec' onClick={() => handleExpandSec('career')}>
      <h3>{data.careerTopic}</h3>
        {expandedSec.career && (
        <>
          <p>{data.careerDescript}</p>
        </>
          )}
      </div>

      <div className='Expand-Sec' onClick={() => handleExpandSec('keyFeatures')}>
      <h3>{data.keyFeaturesTopic}</h3>
        {expandedSec.keyFeatures && (
        <>
        <ul>
          {data.keyFeaturesList.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        </>
          )}
      </div>

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

      <h2>Summary:</h2>
    <p>{summary}</p>

      <button onClick={() => navigate("/ApplicationOverview")}>Apply Now</button>
    </div>
  );
}

export default CourseDetailsPU;