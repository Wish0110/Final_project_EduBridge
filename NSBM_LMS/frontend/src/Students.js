// Students.js
import React, { useEffect, useState } from 'react';

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await fetch('http://localhost:4000/students', {
        method: 'GET',
        credentials: 'include',
        mode: 'cors',
      });

      if (response.ok) {
        const data = await response.json();
        setStudents(data.data);
      } else {
        console.error('Error fetching students:', response.statusText);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <h1>Students</h1>
      <ul>
        {students.map((student) => (
          <li key={student._id}>
            {student.name} ({student.studentid}) - {student.degree}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Students;