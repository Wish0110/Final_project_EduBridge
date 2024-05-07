import React, { useState } from 'react';
import SearchBar from './SearchBar';
import useNavigation from '../../Componenets/Navbar/useNavigation';
import { faArrowLeft, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import searchpage from './home_banner_imgs/searchpage.png';
import './UniversitiesinUK.css';

const UniversitiesinUK = () => {
    const { goBack } = useNavigation();

    const [searchedOptions, setSearchedOptions] = useState([]);
  const handleSearch = (searchTerm) => {
    const matchingOptions = ['University', 'Cambridge Collage', 'Oxford University',].filter(
      (option) => option.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchedOptions(matchingOptions);
  };

  return (
    
    <div className="universities-uk-container">
       
        <h2>Universities in UK</h2>
        <div className="degree-separator-full">
        <button id="back" className="button" onClick={goBack}>
              <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button id="Home" className="button">
          <FontAwesomeIcon icon={faHome} />
        </button>
      </div>         
      <img src={searchpage} alt="Universities in the UK" className="search-image" />
      <div className="Unisearch-bar">
           <SearchBar onSearch={handleSearch} options={[
            'Plymouth University', 'Cambridge Collage', 'Oxford University', 
            'University of Cambridge', 'Imperial College London', 'University of Edinburgh', 
            'Dublin University', 'Cardiff University', 'University of Glasgow', 
            ]} 
            />
           </div>
    </div>
  );
};

export default UniversitiesinUK;