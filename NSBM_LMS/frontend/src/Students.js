import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
        try {
          const response = await axios.get('http://localhost:4000/students');
          setStudents(response.data);
        } catch (err) {
          if (err.response) {
            console.error('Error fetching students:', err.response.status, err.response.statusText);
          } else if (err.request) {
            console.error('Error fetching students:', err.request.statusText);
          } else {
            console.error('Error fetching students:', err.message);
          }
        }
      };

    fetchStudents();
  }, []);

  return (
    <div className="students-page">
      <h2>Students Page</h2>
      <p>Welcome to the Students page!</p>
      <ul>
        {students.map((student) => (
          <li key={student._id}>
            <ul>
              <li>Name: {student.name}</li>
              <li>Student ID: {student.studentid}</li>
              <li>Degree: {student.degree}</li>
              <li>Last Name: {student.lastname}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Students;