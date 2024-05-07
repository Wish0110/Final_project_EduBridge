import React, { useState } from 'react';
import SearchBar from './SearchBar';
import './DegreeList.css';
import { faArrowLeft, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useNavigation from '../../Componenets/Navbar/useNavigation';
//import './UniversitiesinUK.css';

const UniversitiesinUK = () => {
    const { goBack } = useNavigation();

    const [searchedOptions, setSearchedOptions] = useState([]);
  const handleSearch = (searchTerm) => {
    const matchingOptions = ['University', 'Cambridge Collage', 'Oxford University'].filter(
      (option) => option.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchedOptions(matchingOptions);
  };

  return (
    
    <div className="universities-uk-container">
        <div className="degree-separator-full">
        <button id="back" className="button" onClick={goBack}>
              <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button id="Home" className="button">
          <FontAwesomeIcon icon={faHome} />
        </button>
      </div>         
      <h2>Universities in the UK</h2>
      <div className="search-bar">
           <SearchBar onSearch={handleSearch} options={['Plymouth University', 'Cambridge Collage', 'Oxford University']} />
           </div>
    </div>
  );
};

export default UniversitiesinUK;