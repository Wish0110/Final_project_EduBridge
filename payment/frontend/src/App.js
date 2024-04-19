import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51P7A1Q02JGQtmoATHPTsWT25jgAjJCZAxlu0V4v0tnEr6X5swIbjtQneetm0yhkaOaGEs0k5BdPqoylTIOfLuT7700QPE4VzbS');

const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Payment;