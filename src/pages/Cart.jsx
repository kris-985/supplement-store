import { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import {
  getPurchasedProducts,
  updatePurchasedProducts,
} from "../services/product.services";
import { FaTimes } from "react-icons/fa";

export const Cart = () => {
  const { user } = useContext(AppContext);
  const [purchasedProducts, setPurchasedProducts] = useState([]);
  const [paymentStatus, setPaymentStatus] = useState("");

  useEffect(() => {
    if (user) {
      getPurchasedProducts(user.username)
        .then((products) => {
          if (Array.isArray(products)) {
            setPurchasedProducts(products);
          } else {
            setPurchasedProducts([]);
          }
        })
        .catch(console.error);
    } else {
      console.error("User is not defined");
    }
  }, [user]);

  const handleRemove = (productId) => {
    const updatedProducts = purchasedProducts.filter(
      (product) => product.id !== productId
    );
    setPurchasedProducts(updatedProducts);

    // Optionally, also remove from the database
    const updates = {};
    updates[`/users/${user.username}/purchasedProducts/${productId}`] = null;
    update(ref(db), updates).catch(console.error);
  };

  const handlePayment = () => {
    // Simulate payment success
    setPaymentStatus("Payment successful!");

    // Clear the cart
    setPurchasedProducts([]);

    // Update the database to reflect the cleared cart
    updatePurchasedProducts(user.username, []).catch(console.error);
  };

  const totalPrice = purchasedProducts.reduce((acc, product) => {
    const price = Number(product.content?.price) || 0;
    return acc + price;
  }, 0);

  return (
    <div className="container mt-3">
      <h2>Your Cart</h2>
      {paymentStatus && (
        <div className="alert alert-success">{paymentStatus}</div>
      )}
      {purchasedProducts.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              {purchasedProducts.map((product, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <div className="card h-100 shadow border-3 position-relative">
                    <img
                      src={
                        product.content?.picture ||
                        "https://via.placeholder.com/150"
                      }
                      className="card-img-top"
                      alt={product.content?.name || "Product Image"}
                    />
                    <button
                      className="btn btn-danger position-absolute top-0 end-0 m-2"
                      onClick={() => handleRemove(product.id)}
                      style={{ background: "transparent", border: "none" }}
                    >
                      <FaTimes size={20} color="red" />
                    </button>
                    <div className="card-body">
                      <h5 className="card-title">{product.content?.name}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow p-3 mb-5 bg-white rounded">
              <h4>Total Price</h4>
              <h3>${totalPrice.toFixed(2)}</h3>
              <button className="btn btn-primary mt-3" onClick={handlePayment}>
                Pay
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
