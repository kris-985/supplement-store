import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

export const CheckoutForm = ({
  totalPrice,
  setPaymentStatus,
  handleSuccessfulPayment,
}) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // Here, we simulate a successful payment. In real-world scenarios,
    // you would call stripe.confirmCardPayment or another appropriate method
    const paymentResult = { paymentIntent: { status: "succeeded" } }; // Simulated success

    if (paymentResult.paymentIntent.status === "succeeded") {
      setPaymentStatus("Payment successful! Your order has been placed.");

      // Call the success handler
      await handleSuccessfulPayment();
    } else {
      setPaymentStatus(
        "There was an issue processing your payment. Please try again."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay ${totalPrice}
      </button>
    </form>
  );
};
