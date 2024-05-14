import React from 'react';
import Card from './card';
import './About.css'; 
import About1 from './About1.png';
import About2 from './About2.png';
import About3 from './About3.png';
import About4 from './About4.png';

const About = () => {

  return (
    <>
    <div className="card-container"> 
    <div className="card-row">
    <div className="card1">
    <b> <Card image={About1} title="Find Universities using MAP" titleStyle={{ color: 'red' }} /></b>
    </div>
    <div className="card2">
    <b> <Card image={About2} title="Search Universities using Search Engine" description="Search Universities using Search Engine"/></b>
    </div>
    <div className="card3">
    <b> <Card image={About3} title="Explore Details" description="Explore Details"/></b>
    </div>
    <div className="card4">
    <b> <Card image={About4} title="Apply Universities" description="Apply Universities"/></b>
    </div>
    </div>
    </div>
    </>
  );
};

export default About;