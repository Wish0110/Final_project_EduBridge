import React, { useRef, useState } from 'react';
import axios from 'axios';
import { PDFDocument} from 'pdf-lib';
import Letter from './letter';
import './App.css';

function App() {
  const [studentId, setStudentId] = useState('');
  const [studentData, setStudentData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [generatedLetter, setGeneratedLetter] = useState(null);
  // ... other state variables
  const [pdfDoc] = useState(null);
  const pdfViewerRef = useRef(null); // Ref for the PDF viewer

  const handleInputChange = (event) => {
    setStudentId(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage(null);
    setGeneratedLetter(null);

    try {
      const response = await axios.post('http://localhost:3002/api/fetch-student', { studentId });
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
      const response = await axios.post('http://localhost:3002/api/generate-letter', { studentData });
      const { success, data, message } = response.data;

      if (success) {
        setGeneratedLetter(data);
      } else {
        setErrorMessage(message);
      }
    } catch (error) {
      console.error('Error generating letter:', error);
      setErrorMessage('An error occurred while generating the letter.');
    }
  };

  const handleGeneratePdf = async () => {
    try {
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage();
  
      const chunkSize = 50;
      let currentPositionY = 700;
  
      for (let i = 0; i < generatedLetter.length; i += chunkSize) {
        const chunk = generatedLetter.slice(i, i + chunkSize);
  
        page.drawText(chunk, {
          x: 40,
          y: currentPositionY,
          fontSize: 9,
          width: '17cm',
        });
  
        currentPositionY -= 20;
      }

      const htmlTemplate = `
      <html>
        <head>
          <style>
            .letter {
              font-family: Arial, sans-serif;
              font-size: 12px;
              line-height: 1.5;
              margin: 0;
              padding: 0;
            }
            .letter h1 {
              font-size: 18px;
              font-weight: bold;
              margin: 10px 0;
            }
            .letter p {
              margin: 10px 0;
            }
            .letter .signature {
              margin-top: 50px;
              text-align: center;
            }
          </style>
        </head>
        <body class="letter">
          <h1>Student Recommendation Letter</h1>
          <p>Dear Sir/Madam,</p>
          <p>
            I am pleased to write this letter of recommendation for ${studentData.name} with student ID ${studentData.studentId}. ${studentData.name} has completed a ${studentData.degree} degree with a GPA of ${studentData.gpa}. Throughout their academic career, ${studentData.name} has demonstrated dedication, hard work, and a passion for learning.
          </p>
          <p>
            ${studentData.name} has not only excelled in their academic studies, but has also actively participated in ${studentData.sports} activities. They have shown great leadership skills and a strong commitment to their community. ${studentData.name}'s involvement in the ${studentData.faculty} faculty has been instrumental in promoting a positive and inclusive environment.
          </p>
          <p>
            I am confident that ${studentData.name} will continue to excel in their future endeavors and make valuable contributions to society. I highly recommend ${studentData.name} for any opportunities that may come their way.
          </p>
          <div class="signature">
            Best regards,<br />
            Dean, Faculty of ${studentData.faculty}
          </div>
        </body>
      </html>
    `;
  
    const pdfBytes = await pdfDoc.embedHtml(htmlTemplate);
    const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });

    if (pdfViewerRef.current) {
      createPdfViewer(pdfBlob);
    } else {
      console.error('Error: pdfViewerRef.current is null');
    }
  } catch (error) {
    console.error('Error generating PDF:', error);
    setErrorMessage('Error generating PDF');
  }
};

const createPdfViewer = (pdfBlob) => {
  const viewer = document.createElement('iframe');
  viewer.style.width = '100%';
  viewer.style.height = '500px';
  viewer.src = URL.createObjectURL(pdfBlob);
  pdfViewerRef.current.appendChild(viewer);
};

  return (
    <div className="App">
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
        <div>
          <h2>Student Details</h2>
          <p>Name: {studentData.name}</p>
          <p>Student ID: {studentData.studentId}</p>
          <p>Degree: {studentData.degree}</p>
          <p>GPA: {studentData.gpa}</p>
          <p>Sports: {studentData.sports}</p>
          <p>Faculty: {studentData.faculty}</p>
          <button onClick={handleGenerateLetter}>Generate Letter</button>
        </div>
      )}
      {errorMessage && <p className="error">{errorMessage}</p>}
      {generatedLetter && (
        <div>
          <h2>Generated Letter</h2>
          <pre>{generatedLetter}</pre>

          <button onClick={handleGeneratePdf}>Convert to PDF</button>
          <div className="pdf-viewer-container" ref={pdfViewerRef} />
        </div>
      )}
    </div>
  );
}

export default App;
