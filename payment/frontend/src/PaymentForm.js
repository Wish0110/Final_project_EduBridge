import React from 'react';
import { CardElement } from '@stripe/react-stripe-js';

function PaymentForm() {
  return (
    <form>
      <CardElement />
      <button type="submit" disabled>
        Pay
      </button>
    </form>
  );
}

export default PaymentForm;