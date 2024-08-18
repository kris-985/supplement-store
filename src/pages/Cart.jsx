import React, { useContext, useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import AppContext from "../context/AppContext";

import { FaTimes } from "react-icons/fa";
import { CheckoutForm } from "../components";
import {
  getPurchasedProducts,
  saveOrderHistory,
} from "../services/product.services";

// Load your Stripe public key
const stripePromise = loadStripe(
  "pk_test_51PiQZjRtHdvVHimoxL7A4WKmSXl65EWI2EiHlVBoF3sI7bLgZZOE3ywM7xvldhjZUU5stSqgluUBxcB4ZH7bl6cn00DHSKqZKB"
);

export const Cart = () => {
  const { user } = useContext(AppContext);
  const [purchasedProducts, setPurchasedProducts] = useState([]);
  const [paymentStatus, setPaymentStatus] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [discountCode, setDiscountCode] = useState("");
  const [appliedDiscounts, setAppliedDiscounts] = useState([]);

  useEffect(() => {
    if (user) {
      getPurchasedProducts(user)
        .then((products) => {
          setPurchasedProducts({ ...products });
        })
        .catch(console.error);
    } else {
      console.error("User is not defined");
    }
  }, [user]);

  const handleSuccessfulPayment = async () => {
    try {
      // Save the order history
      await saveOrderHistory(
        user,
        purchasedProducts,
        finalPrice,
        shippingAddress
      );

      // Clear the cart
      setPurchasedProducts([]);

      setPaymentStatus("Payment successful! Your order has been placed.");
    } catch (error) {
      console.error("Error handling payment:", error);
      setPaymentStatus(
        "There was an issue processing your payment. Please try again."
      );
    }
  };
  const handleRemove = (productId) => {
    const updatedProducts = Object.values(purchasedProducts).filter(
      (product) => product.id !== productId
    );
    setPurchasedProducts(updatedProducts);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    setPurchasedProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: newQuantity }
          : product
      )
    );
  };

  const handleAddressChange = (event) => {
    setShippingAddress(event.target.value);
  };

  const handleDiscountCodeChange = (event) => {
    setDiscountCode(event.target.value);
  };

  const applyDiscount = () => {
    const validCodes = {
      DISCOUNT10: 10,
      DISCOUNT20: 20,
      FREESHIP: 5, // Example fixed discount
    };

    const discount = validCodes[discountCode.toUpperCase()];

    if (discount) {
      setAppliedDiscounts((prevDiscounts) => [...prevDiscounts, discount]);
      setPaymentStatus(`Discount applied: ${discount}% off!`);
    } else {
      setPaymentStatus("Invalid discount code.");
    }

    setDiscountCode("");
  };

  const totalPriceWithoutDiscount = Object.values(purchasedProducts).reduce(
    (acc, product) => {
      const price = Number(product.content?.price) || 0;
      return acc + price * product.quantity;
    },
    0
  );

  const totalDiscount = appliedDiscounts.reduce(
    (acc, discount) => acc + discount,
    0
  );

  const totalPrice = (
    totalPriceWithoutDiscount *
    (1 - totalDiscount / 100)
  ).toFixed(2);

  // Determine if shipping is free
  const shippingCost = totalPriceWithoutDiscount >= 100 ? 0 : 10; // Example shipping cost
  const finalPrice = (parseFloat(totalPrice) + shippingCost).toFixed(2);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5">Your Cart</h2>
      {paymentStatus && (
        <div
          className={`alert ${
            totalDiscount > 0 ? "alert-success" : "alert-danger"
          }`}
        >
          {paymentStatus}
        </div>
      )}
      {purchasedProducts.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              {Object.values(purchasedProducts).map((product, index) => (
                <div key={index} className="col-md-12 mb-4">
                  <div className="card h-100 shadow-lg border-0 position-relative">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={
                            product.content?.picture ||
                            "https://via.placeholder.com/150"
                          }
                          className="card-img-top rounded-start"
                          alt={product.content?.name || "Product Image"}
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">
                            {product.content?.name}
                          </h5>
                          <p className="card-text text-muted">
                            ${product.content?.price}
                          </p>
                          <div className="d-flex align-items-center mb-3">
                            <label
                              className="me-2"
                              htmlFor={`quantity-${product.id}`}
                            >
                              Quantity:
                            </label>
                            <input
                              type="number"
                              id={`quantity-${product.id}`}
                              min="1"
                              value={product.quantity}
                              onChange={(e) =>
                                handleQuantityChange(
                                  product.id,
                                  parseInt(e.target.value)
                                )
                              }
                              className="form-control w-25"
                            />
                          </div>
                          <button
                            className="btn btn-outline-danger position-absolute top-0 end-0 m-2"
                            onClick={() => handleRemove(product.id)}
                            style={{
                              background: "transparent",
                              border: "none",
                            }}
                          >
                            <FaTimes size={20} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
                  <p className="text-success">
                    Congratulations! Free Shipping!
                  </p>
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
        </div>
      )}
    </div>
  );
};
