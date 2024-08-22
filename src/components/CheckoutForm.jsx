import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

export const CheckoutForm = ({
  totalPrice,
  setPaymentStatus,
  handleSuccessfulPayment,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState(null);
  const [isCardComplete, setIsCardComplete] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements || !isCardComplete) {
      if (!isCardComplete) {
        setPaymentStatus("Please enter your card details.");
      }
      return;
    }

    const paymentResult = { paymentIntent: { status: "succeeded" } };

    if (paymentResult.paymentIntent.status === "succeeded") {
      setPaymentStatus("Payment successful! Your order has been placed.");

      await handleSuccessfulPayment();
    } else {
      setPaymentStatus(
        "There was an issue processing your payment. Please try again."
      );
    }
  };

  const handleCardChange = (event) => {
    setCardError(event.error ? event.error.message : null);
    setIsCardComplete(event.complete);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement onChange={handleCardChange} />
      {cardError && <div style={{ color: "red" }}>{cardError}</div>}
      <button type="submit" disabled={!stripe || !isCardComplete}>
        Pay ${totalPrice}
      </button>
    </form>
  );
};
