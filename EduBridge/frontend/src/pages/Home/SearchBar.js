import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from './Popup';


const SearchBar = ({ onSearch, options }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      onSearch(searchTerm);
    };
  
    const filteredOptions = options.filter((option) =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    const togglePopup = () => {
      setIsOpen(!isOpen);
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
      <Popup options={filteredOptions} isOpen={isOpen} togglePopup={togglePopup} />
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