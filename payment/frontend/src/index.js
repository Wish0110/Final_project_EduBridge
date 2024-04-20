import React from 'react';
import ReactDOM from 'react-dom';
import { LoadingIndicator } from './components/LoadingIndicator';
import { CheckoutForm } from './components/CheckoutForm';

ReactDOM.render(
  <React.StrictMode>
    <LoadingIndicator />
    <CheckoutForm />
  </React.StrictMode>,
  document.getElementById('root')
);