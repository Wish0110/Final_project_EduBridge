import React from 'react';
import './IsIntegrated.css';

const universityOptions = [
    { name: 'NSBM Green University', isCorrect: false },
    { name: 'Integrated University 1', isCorrect: false },
    { name: 'Integrated University 2', isCorrect: false },
    { name: 'Integrated University 3', isCorrect: false },
    { name: 'Integrated University 4', isCorrect: false },
];

const UniversityChoice = () => {
  const [selectedUniversity, setSelectedUniversity] = React.useState(null);

  const handleUniversityClick = (university) => {
    setSelectedUniversity(university);
  };

  const handleNoClick = () => {
    setSelectedUniversity(null);
  };

  return (
    <div className="university-choice-container">
      <h1>One of these is a university where you studied your degree?</h1>
      <div className="university-options">
        {universityOptions.map((university, index) => (
          <button
            key={index}
            className={`university-button ${selectedUniversity === university ? 'selected' : ''}`}
            onClick={() => handleUniversityClick(university)}
          >
            {university.name}
          </button>
        ))}
      </div>
      <button className="no-button" onClick={handleNoClick}>
        No
      </button>
    </div>
  );
};

export default UniversityChoice;