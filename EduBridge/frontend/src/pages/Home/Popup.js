import React from 'react';

const Popup = ({ options, isOpen, togglePopup }) => {
  return (
    <div className="popup" style={{ display: isOpen ? 'block' : 'none' }}>
      <button onClick={togglePopup}>Search</button>
      <ul className="options">
        {options.map((option, index) => (
          <li key={index} onClick={togglePopup}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Popup;