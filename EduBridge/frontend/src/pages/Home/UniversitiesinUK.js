import React, { useState } from 'react';
import SearchBar from './SearchBar';
//import './UniversitiesinUK.css';

const UniversitiesinUK = () => {

    const [searchedOptions, setSearchedOptions] = useState([]);
  const handleSearch = (searchTerm) => {
    const matchingOptions = ['University', 'Cambridge Collage', 'Oxford University'].filter(
      (option) => option.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchedOptions(matchingOptions);
  };

  return (
    <div className="universities-uk-container">
      <h2>Universities in the UK</h2>
      <div className="search-bar">
           <SearchBar onSearch={handleSearch} options={['Plymouth University', 'Cambridge Collage', 'Oxford University']} />
           </div>
    </div>
  );
};

export default UniversitiesinUK;