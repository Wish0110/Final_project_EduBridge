import React from 'react';

const Letter = ({ studentData }) => {
  return (
    <div className="letter">
      <h1>Student Recommendation Letter</h1>
      <p>Dear Sir/Madam,</p>
      <p>
        I am pleased to write this letter of recommendation for {studentData.name} with student ID {studentData.studentId}. {studentData.name} has completed a {studentData.degree} degree with a GPA of {studentData.gpa}. Throughout their academic career, {studentData.name} has demonstrated dedication, hard work, and a passion for learning.
      </p>
      <p>
        {studentData.name} has not only excelled in their academic studies, but has also actively participated in {studentData.sports} activities. They have shown great leadership skills and a strong commitment to their community. {studentData.name}'s involvement in the {studentData.faculty} faculty has been instrumental in promoting a positive and inclusive environment.
      </p>
      <p>
        I am confident that {studentData.name} will continue to excel in their future endeavors and make valuable contributions to society. I highly recommend {studentData.name} for any opportunities that may come their way.
      </p>
      <div className="signature">
        Best regards,<br />
        Dean, Faculty of {studentData.faculty}
      </div>
    </div>
  );
};

export default Letter;