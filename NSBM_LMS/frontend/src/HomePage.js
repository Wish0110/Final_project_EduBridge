import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const HomePage = () => {
  return (
    <div className="home-page">

      <div className='slot1'>
      <button className="btn btn-primary">Button 1</button>
      </div>

      <div className='slot2'>
      <button className="btn btn-secondary">Button 2</button>
      </div>

      <div className='slot3'>
      <button className="btn btn-success">Button 3</button>
      </div>

      <div className='slot4'>
      <Link to="/students">
        <button className="btn btn-danger">Button 4</button>
      </Link>    
      </div>
      
      </div>
  );
};

export default HomePage;