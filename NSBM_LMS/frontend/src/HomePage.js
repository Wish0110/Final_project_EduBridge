import React from 'react';
import { Link } from 'react-router-dom';
import Nspot from './top.jpg';
import './home.css';

const HomePage = () => {
  return (
    <div className="home-page">

      <div className="slots-container">
      <img src={Nspot} alt="NSBM Logo" className="nspot"/>
      <div className='slot slot1'>
      <button className="btn btn-primary">NLEARN - NSBM LMS</button>
      </div>

      <div className='slot slot2'>
      <button className="btn btn-secondary">PLYMOUTH UNIVERSITY</button>
      </div>

      <div className='slot slot3'>
      <button className="btn btn-success">VICTORIA UNIVERSITY</button>
      </div>

      <div className='slot slot4'>
      <Link to="/students">
        <button className="btn btn-danger">STUDENT PROFILE</button>
      </Link>    
      </div>
      </div>
      </div>
  );
};

export default HomePage;