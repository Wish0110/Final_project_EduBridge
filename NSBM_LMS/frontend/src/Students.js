import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await axios.get('http://localhost:5000/api/students');
      setStudents(response.data);
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
              <li>Degree: {student.degree}</li>
              <li>Student ID: {student.studentid}</li>
              <li>Email: {student.Email}</li>
              <li>Address Line 1: {student.addressLine1}</li>
              <li>Address Line 2: {student.addressLine2 || '-'}</li>
              <li>Address Line 3: {student.addressLine3 || '-'}</li>
              <li>Address Line 4: {student.addressLine4 || '-'}</li>
              <li>Date of Birth: {student.dateOfBirth}</li>
              <li>Gender: {student.gender}</li>
              <li>Preferred Name: {student.preferredName || '-'}</li>
              <li>Title: {student.title}</li>
              <li>Last Name: {student.lastname}</li>
              <li>Telephone Number: {student.teleNumber}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Students;