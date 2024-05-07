import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const SearchBar = ({ onSearch, options }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showPopup, setShowPopup] = useState(false); // Add a state to track popup visibility

  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSearch(searchTerm);
    };
  
    const filteredOptions = options.filter((option) =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    const handlePopupToggle = () => {
      setShowPopup(!showPopup);
    };

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search universities..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
        <button type="button" onClick={handlePopupToggle}>Popup</button> 
      {showPopup && ( // Conditionally render the popup
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: 150,
            height: 300,
            backgroundColor: 'white',
            border: '1px solid #ddd',
            padding: 10,
          }}
        >
          {/* Add popup content here */}
          <p>Popup content</p>
        </div>
      )}
        <ul>
          {filteredOptions.map((option, index) => (
            <li key={`${index}-${option.toLowerCase().replace(' ', '-')}`}>
              <Link to={`/search/${option.toLowerCase().replace(' ', '-')}`}>
                {option}
              </Link>
            </li>
          ))}
        </ul>
      </form>
    );
  };
  
  export default SearchBar;