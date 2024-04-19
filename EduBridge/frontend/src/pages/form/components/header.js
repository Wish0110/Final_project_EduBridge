import React from 'react';
import { faArrowLeft, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
    return (

        <div>
            <div className="degree-separator-full">
            <button id="back" className="button">
                  <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button id="Home" className="button">
              <FontAwesomeIcon icon={faHome} />
            </button>
          </div> 
        </div>
        );
}

export default Header;