import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar';

function App () {

  return (
    <div className='d-flex'>
      <div className='col-auto'>
        <Sidebar />
    </div>     
    </div>
  );
};

export default App;