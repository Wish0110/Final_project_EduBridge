import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { CheckoutFormInner } from './CheckoutFormInner';
import { LoadingIndicator } from './LoadingIndicator';

const stripePromise = loadStripe('YOUR_STRIPE_PUBLISHABLE_KEY');

export function CheckoutForm() {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    // Generate the client secret for the payment intent
    fetch('/api/payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, []);

  if (!clientSecret) {
    return <LoadingIndicator />;
  }

  return (
    <Elements stripe={stripePromise}>
      <CheckoutFormInner clientSecret={clientSecret} />
    </Elements>
  );
}