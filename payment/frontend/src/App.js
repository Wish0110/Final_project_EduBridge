import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './checkout';
import PaymentForm from './PaymentForm';

const stripePromise = loadStripe('YOUR_STRIPE_PUBLISHABLE_KEY');

function App() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}

export default App;