import React from 'react';
import Card from './card';
import './about.css'; 

const About = () => {

  return (
    <>
    <div className="card-container"> 
    <div className="card-row">
    <div className="card1">
      <Card />
    </div>
    <div className="card2">
        <Card />
    </div>
    <div className="card3">
        <Card />
    </div>
    <div className="card4">
        <Card />
    </div>
    </div>
    </div>
    </>
  );
};

export default About;