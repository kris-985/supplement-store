import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);
    setError(null);

    const cardElement = elements.getElement(CardElement);

    const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (stripeError) {
      console.error('Error creating payment method:', stripeError);
      setError(stripeError.message);
      setProcessing(false);
    } else {
      console.log('PaymentMethod created:', paymentMethod);

      setTimeout(() => {
        navigate('/success');
      }, 1000); 

      setProcessing(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <CardElement />
      {error && <span style={{ color: 'red' }}>{error}</span>}
      <button type="submit" disabled={!stripe || processing}>
        {processing ? 'Processing...' : 'Pay'}
      </button>
    </Form>
  );
};

const Form = styled.form`
  width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
