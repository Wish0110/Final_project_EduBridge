// Students.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:4000/students');
        setStudents(response.data.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <h1>Students</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Student ID</th>
            <th>Degree</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{`${student.name} ${student.lastname}`}</td>
              <td>{student.studentid}</td>
              <td>{student.degree}</td>
              <td>{student.lastname}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;