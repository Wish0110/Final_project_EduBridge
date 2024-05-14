import React, { useEffect, useState } from 'react';

const StudentsPage = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch('/students');
      const data = await response.json();
      setStudents(data.data);
    } catch (err) {
      console.error('Error fetching students:', err);
    }
  };

  return (
    <div>
      <h1>Students</h1>
      <ul>
        {students.map(student => (
          <li key={student._id}>
            <h2>{student.name} {student.lastname}</h2>
            <p>Student ID: {student.studentid}</p>
            <p>Degree: {student.degree}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsPage;