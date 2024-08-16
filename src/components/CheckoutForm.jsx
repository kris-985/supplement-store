import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

export const CheckoutForm = ({
  totalPrice,
  setPaymentStatus,
  setPurchasedProducts,
  user,
  shippingAddress,
}) => {
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: {
        address: {
          line1: shippingAddress,
        },
      },
    });

    if (error) {
      console.error(error);
      setPaymentStatus("Payment failed. Please try again.");
    } else {
      console.log("PaymentMethod", paymentMethod);

      // Simulate payment success
      setPaymentStatus("Payment successful!");

      // Clear the cart
      setPurchasedProducts([]);

      // Update the database to reflect the cleared cart
      updatePurchasedProducts(user, []).catch(console.error);
    }
  };

  return (
    <form onSubmit={handlePayment}>
      <CardElement className="form-control p-3 border rounded mb-3" />
      <button
        className="btn btn-success w-100 mt-3"
        type="submit"
        disabled={!stripe}
      >
        Pay ${totalPrice}
      </button>
    </form>
  );
};
