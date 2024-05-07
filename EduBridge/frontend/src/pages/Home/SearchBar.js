import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchBar = ({ onSearch, options }) => {
    const [searchTerm, setSearchTerm] = useState('');

  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSearch(searchTerm);
    };
  
    const filteredOptions = options.filter((option) =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    );
  


    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search universities..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
        
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