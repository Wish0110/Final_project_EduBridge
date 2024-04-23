import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <button className="btn btn-primary">Button 1</button>
      <button className="btn btn-secondary">Button 2</button>
      <button className="btn btn-success">Button 3</button>
      <Link to="/students">
        <button className="btn btn-danger">Button 4</button>
      </Link>    </div>
  );
};

export default HomePage;