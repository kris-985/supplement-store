import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import { getPurchasedProducts } from "../services/product.services";
import { OrderSummary } from "../components/OrderSummary";
import { SingleCartCard } from "../components/SingleCartCard";

export const Cart = () => {
  const { user } = useContext(AppContext);
  const [purchasedProducts, setPurchasedProducts] = useState([]);
  const [paymentStatus, setPaymentStatus] = useState("");

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
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5">Your Cart</h2>
      {paymentStatus && (
        <div className={`alert alert-success`}>{paymentStatus}</div>
      )}
      {purchasedProducts.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <SingleCartCard
                purchasedProducts={purchasedProducts}
                setPurchasedProducts={setPurchasedProducts}
              />
            </div>
          </div>
          {purchasedProducts.length !== 0 && (
            <OrderSummary
              purchasedProducts={purchasedProducts}
              setPaymentStatus={setPaymentStatus}
              setPurchasedProducts={setPurchasedProducts}
            />
          )}
        </div>
      )}
    </div>
  );
};
