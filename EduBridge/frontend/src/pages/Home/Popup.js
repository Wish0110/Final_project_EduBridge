import React, { useState } from 'react';

const Popup = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="popup">
      <button onClick={togglePopup}>Search</button>
      {isOpen && (
        <ul className="options">
          {options.map((option, index) => (
            <li key={index} onClick={togglePopup}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Popup;