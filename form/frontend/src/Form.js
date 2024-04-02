import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar';

function Form() {
  return (
    <BrowserRouter>
      <div className='d-flex'>
        <div className='col-auto'>
          <Sidebar />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Form;