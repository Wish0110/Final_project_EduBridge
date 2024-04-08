import React, { useRef, useState } from 'react';
import axios from 'axios';
import { PDFDocument } from 'pdf-lib';

function App() {
  const [studentId, setStudentId] = useState('');
  const [studentData, setStudentData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [generatedLetter, setGeneratedLetter] = useState(null);
  // ... other state variables
  const [pdfDoc, setPdfDoc] = useState(null);
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
    page.drawText(generatedLetter, {
      x: 100,
      y: 100,
      fontSize: 12
    });
    const pdfBlob = await pdfDoc.save();
    createPdfViewer(pdfBlob); // Pass pdfBlob directly
  } catch (error) {
    console.error('Error generating PDF:', error);
    setErrorMessage('Error generating PDF');
  }
};

  

  const createPdfViewer = (pdfBlob) => {
    const viewer = document.createElement('iframe');
    viewer.style.width = '100%';
    viewer.style.height = '500px';
    viewer.src = URL.createObjectURL(pdfBlob); // Use the passed pdfBlob
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
    {pdfDoc && (
      <div ref={pdfViewerRef} />
    )}
        </div>
      )}
    </div>
    
  );
}

export default App;
