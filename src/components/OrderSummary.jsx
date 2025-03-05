import { Elements } from "@stripe/react-stripe-js";
import { useContext, useState } from "react";
import { CheckoutForm } from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import AppContext from "../context/AppContext";
import { saveOrderHistory } from "../services/product.services";
import { priceSum, validCodes } from "../utils/helpers";
import PropTypes from "prop-types";

const stripePromise = loadStripe(
  "pk_test_51PiQZjRtHdvVHimoxL7A4WKmSXl65EWI2EiHlVBoF3sI7bLgZZOE3ywM7xvldhjZUU5stSqgluUBxcB4ZH7bl6cn00DHSKqZKB"
);

export const OrderSummary = ({
  purchasedProducts,
  setPaymentStatus,
  setPurchasedProducts,
}) => {
  const { user } = useContext(AppContext);
  const [shippingAddress, setShippingAddress] = useState("");
  const [discountCode, setDiscountCode] = useState("");
  const [appliedDiscounts, setAppliedDiscounts] = useState([]);
  const { totalPrice, shippingCost, finalPrice } = priceSum(
    purchasedProducts,
    appliedDiscounts
  );

  const handleAddressChange = (event) => {
    setShippingAddress(event.target.value);
  };

  const handleDiscountCodeChange = (event) => {
    setDiscountCode(event.target.value);
  };

  const applyDiscount = () => {
    const discount = validCodes[discountCode.toUpperCase()];

    if (discount) {
      setAppliedDiscounts((prevDiscounts) => [...prevDiscounts, discount]);
      setPaymentStatus(`Discount applied: ${discount}% off!`);
    } else {
      setPaymentStatus("Invalid discount code.");
    }

    setDiscountCode("");
  };

  const handleSuccessfulPayment = async () => {
    try {
      await saveOrderHistory(
        user,
        purchasedProducts,
        finalPrice,
        shippingAddress
      );

      setPurchasedProducts([]);

      setPaymentStatus("Payment successful! Your order has been placed.");
    } catch (error) {
      console.error("Error handling payment:", error);
      setPaymentStatus(
        "There was an issue processing your payment. Please try again."
      );
    }
  };
  return (
    <div className="col-md-4">
      <div className="card shadow-lg p-4 bg-white rounded">
        <h4 className="text-center mb-4">Order Summary</h4>
        <div className="mb-3">
          <h5>Total Price</h5>
          <h3 className="text-primary">${totalPrice}</h3>
          {shippingCost > 0 && (
            <p className="text-muted">Shipping Cost: ${shippingCost}</p>
          )}
          {shippingCost === 0 && (
            <p className="text-success">Congratulations! Free Shipping!</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="discount-code" className="form-label">
            Discount Code
          </label>
          <input
            type="text"
            id="discount-code"
            value={discountCode}
            onChange={handleDiscountCodeChange}
            className="form-control"
            placeholder="Enter your code"
          />
          <button
            className="btn btn-primary mt-3 w-100"
            onClick={applyDiscount}
          >
            Apply Discount
          </button>
          <div className="mt-3">
            <h5>Applied Discounts:</h5>
            <ul className="list-unstyled">
              {appliedDiscounts.map((discount, index) => (
                <li key={index} className="text-success">
                  {discount}% off
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="shipping-address" className="form-label">
            Shipping Address
          </label>
          <textarea
            id="shipping-address"
            value={shippingAddress}
            onChange={handleAddressChange}
            className="form-control"
            rows="3"
            placeholder="Enter your address here"
          />
        </div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4>Total Amount</h4>
          <h3 className="text-success">${finalPrice}</h3>
        </div>
        <Elements stripe={stripePromise}>
          <CheckoutForm
            totalPrice={finalPrice}
            setPaymentStatus={setPaymentStatus}
            setPurchasedProducts={setPurchasedProducts}
            user={user}
            shippingAddress={shippingAddress}
            handleSuccessfulPayment={handleSuccessfulPayment}
          />
        </Elements>
      </div>
    </div>
  );
};

OrderSummary.propTypes = {
  purchasedProducts: PropTypes.object.isRequired,
  setPaymentStatus: PropTypes.func.isRequired,
  setPurchasedProducts: PropTypes.func.isRequired,
};
