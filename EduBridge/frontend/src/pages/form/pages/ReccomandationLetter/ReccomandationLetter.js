import React, { useState } from 'react';
import axios from 'axios';
import html2pdf from 'html2pdf.js';
import 'url-polyfill';
import './letter.css';
import Sidebar from '../../components/Sidebar';

function ReccomandationLetter(){
  
    const [studentId, setStudentId] = useState('');
    const [studentData, setStudentData] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [generatedLetter, setGeneratedLetter] = useState(null);
    
  
    const handleInputChange = (event) => {
      setStudentId(event.target.value);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      setErrorMessage(null);
      setGeneratedLetter(null);
  
      try {
        const response = await axios.post('http://localhost:3005/api/fetch-student', { studentId });
        const { success, data, message } = response.data;
  
        if (success) {
          setStudentData(data);
        } else {
          setErrorMessage(message);
        }
      } catch (error) {
        console.error('Error fetching student data:', error);
        setErrorMessage('An error occurred while fetching student data.');
      }
    };
  
    const handleGenerateLetter = async () => {
      setErrorMessage(null);
      setGeneratedLetter(null);
    
      if (!studentData) {
        setErrorMessage('Please fetch student data first.');
        return;
      }
    
      try {
        const response = await axios.post('http://localhost:3005/api/generate-letter', { studentData });
        const { success, data, message } = response.data;
    
        if (success) {
          // Split the letter into words
          const words = data.split(' ');
    
          // Add line breaks after every 7 words
          const lineBreaks = words.reduce((result, word, index) => {
            if ((index + 1) % 7 === 0) {
              result.push(word, '\n');
            } else {
              result.push(word);
            }
            return result;
          }, []);
    
          // Join the words with line breaks
          const letterWithLineBreaks = lineBreaks.join(' ');
    
          setGeneratedLetter(letterWithLineBreaks);
        } else {
          setErrorMessage(message);
        }
      } catch (error) {
        console.error('Error generating letter:', error);
        setErrorMessage('An error occurred while generating the letter.');
      }
    };
  
    const handleGeneratePdf = () => {
      if (!generatedLetter) {
        setErrorMessage('Please generate the letter first.');
        return;
      }
    
      const opt = {
        margin: 1,
        filename: 'recommendation_letter.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
      html2pdf().set(opt).from(document.getElementById('letter-content')).save();
    };
    
        
    return (
      <Sidebar>
      <div className="letter-ID">
        <h1>Student Recommendation Letter Generator</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="studentId">Student ID:</label>
          <input
            type="text"
            id="studentId"
            value={studentId}
            onChange={handleInputChange}
          />
          <button type="submit">Fetch Student Data</button>
        </form>
        {studentData && (
          <div className='letter-confirm'>
            <h2>Student Details</h2>
            <p>Name: {studentData.name}</p>
            <p>Student ID: {studentData.studentId}</p>
            <p>Degree: {studentData.degree}</p>
            <p>Faculty: {studentData.faculty}</p>
            <button onClick={handleGenerateLetter}>Generate Letter</button>
          </div>
        )}
        {errorMessage && <p className="error">{errorMessage}</p>}
        {generatedLetter && (
          <div letter-display>
            <h2>Generated Letter</h2>
            <div className='pdf-display'>
            <pre className='letter-display'>{generatedLetter}</pre>
            </div>
  
            <button onClick={handleGeneratePdf}>Convert to PDF</button>
            <div className='PDF-View'>
            <pre id="letter-content" dangerouslySetInnerHTML={{ __html: generatedLetter }}></pre>
            </div>
          </div>
        )}
      </div>
      </Sidebar>
    );
  }



export default ReccomandationLetter;
