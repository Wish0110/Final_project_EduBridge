import React from 'react';
import './App.css';
import Home from './Home';
//import MapChart from './MapChart';

function App() {
  const handleMapClick = () => {
    // Code to handle button click and show MapChart
  };

  return (
    <div className="App">
      <Home onClick={handleMapClick} />
    </div>
  );
}

export default App;