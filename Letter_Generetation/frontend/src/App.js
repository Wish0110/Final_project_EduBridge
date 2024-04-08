import React, { useState } from 'react';
import axios from 'axios';
import { PDFDocument } from 'pdf-lib';

function App() {
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
        const pdfDoc = await PDFDocument.load(await fetch('path/to/letter-template.pdf')); // Replace with the path to your letter template
        const page = pdfDoc.getPages()[0];
  
        const { width, height } = page.getSize();
        const textWidth = page.getFont('Helvetica').widthOfTextAtSize(data, 12);
  
        const textHeight = 12; // Line height
        const yCoord = height - textHeight - 36; // 36 is the top margin
  
        const newText = page.drawText(data, {
          x: (width - textWidth) / 2,
          y: yCoord,
          size: 12,
          font: 'Helvetica',
          color: '#000000',
        });
  
        const pdfBytes = await pdfDoc.save();
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
  
        setGeneratedLetter(url);
      } else {
        setErrorMessage(message);
      }
    } catch (error) {
      console.error('Error generating letter:', error);
      setErrorMessage('An error occurred while generating the letter.');
    }
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
        </div>
      )}
    </div>
  );
}

export default App;
