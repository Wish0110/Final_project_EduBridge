import React from 'react';
import './UniversityChoice.css';

const universityOptions = [
  { name: 'University of Oxford', isCorrect: false },
  { name: 'University of Cambridge', isCorrect: false },
  { name: 'NSBM Green University', isCorrect: true },
  { name: 'University of Sussex', isCorrect: false },
  { name: 'University of Warwick', isCorrect: false },
];

const UniversityChoice = () => {
  const [selectedUniversity, setSelectedUniversity] = React.useState(null);
  const [showNoButton, setShowNoButton] = React.useState(false);

  const handleUniversityClick = (university) => {
    setSelectedUniversity(university);
    setShowNoButton(true);
  };

  const handleNoClick = () => {
    setSelectedUniversity(null);
    setShowNoButton(false);
  };

  return (
    <div className="university-choice-container">
      <h1>One of these is a university where you studied your degree?</h1>
      <div className="university-options">
        {universityOptions.map((university, index) => (
          <button
            key={index}
            className={`university-button ${selectedUniversity === university ? 'selected' : ''}`}
            disabled={showNoButton}
            onClick={() => handleUniversityClick(university)}
          >
            {university.name}
          </button>
        ))}
      </div>
      {showNoButton && (
        <button className="no-button" onClick={handleNoClick}>
          No
        </button>
      )}
    </div>
  );
};

export default UniversityChoice;