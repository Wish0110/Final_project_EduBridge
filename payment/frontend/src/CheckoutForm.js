import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import STRIPE_PUBLISHABLE from '../constants/stripe';
import PAYMENT_SERVER_URL from '../constants/server';

const CURRENCY = 'USD';
const fromDollarToCent = amount => parseInt(amount * 100);
const successPayment = data => {
  alert('Payment Successful');
};
const errorPayment = data => {
  alert('Payment Error');
};

const onToken = (token) => {
  const amount = fromDollarToCent(10);

  axios.post(`${PAYMENT_SERVER_URL}/payment`, {
    amount,
    currency: CURRENCY,
    token: token.id,
  })
  .then(response => {
    if (response.data.success) {
      successPayment(response.data);
    } else {
      errorPayment(response.data);
    }
  })
  .catch(error => {
    console.error(error);
    errorPayment(error);
  });
}

const CheckoutForm = () => {
  return (
    <StripeCheckout
      label="Pay Now"
name="Stripe.com"
      description="Accept payments on your site"
      panelLabel="Pay Now"
      amount={fromDollarToCent(10)}
      token={onToken}
      stripeKey={STRIPE_PUBLISHABLE}
    />
  );
};

export default CheckoutForm;