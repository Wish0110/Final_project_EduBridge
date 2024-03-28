import React from 'react';
import { Button } from 'react-bootstrap';
import MapChart from './MapChart';

const Home = ({ onClick }) => {
  return (
    <div>
      <Button variant="primary" size="lg" onClick={onClick}>
        Map
      </Button>
      <MapChart />
    </div>
  );
};

export default Home;