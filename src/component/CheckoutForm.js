import {
    CardElement, useElements, useStripe
} from '@stripe/react-stripe-js';
import React from 'react';
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    if(!error){
        const {id} = paymentMethod
    }
  };
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe || !elements}>
        Pay Bill
        </button>
        </form>
    </div>
  );
}

export default CheckoutForm;
