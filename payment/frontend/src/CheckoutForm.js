import React, { useRef } from 'react';
import { CardElement, useStripe, } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const cardElement = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // TODO: Handle payment submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement ref={cardElement} />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;