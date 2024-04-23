import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Students from './Students';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/students" element={<Students />} />
      </Routes>
    </div>
  );
};


export default App;