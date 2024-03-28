import React from 'react';
import { Link } // Use Link for cleaner navigation
  from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome!</h1>
      <p>Explore the location of Plymouth University.</p>
      <Link to="/map">
        <button>View Map</button>
      </Link>
    </div>
  );
};

export default Home;
