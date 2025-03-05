import { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import { getOrderHistory } from "../services/product.services";

export const OrderHistory = () => {
  const { user } = useContext(AppContext);
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    if (user) {
      getOrderHistory(user)
        .then((orders) => {
          setOrderHistory(orders);
        })
        .catch((error) => {
          console.error("Error fetching order history:", error);
        });
    }
  }, [user]);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5">Your Order History</h2>
      {orderHistory.length === 0 ? (
        <p className="text-center">You have no order history.</p>
      ) : (
        <div className="row">
          {orderHistory.map((order, index) => (
            <div key={index} className="col-md-12 mb-4">
              <div className="card h-100 shadow-lg border-0">
                <div className="card-body">
                  <h5 className="card-title">
                    Order placed on{" "}
                    {new Date(order.orderDate).toLocaleDateString()}
                  </h5>
                  <h6>Total Price: ${order.totalPrice}</h6>
                  <p>Shipping Address: {order.shippingAddress}</p>
                  <ul>
                    {Array.isArray(order.products) ? (
                      order.products.map((product, i) => (
                        <li key={i}>
                          {product.content.name} - Quantity: {product.quantity}
                        </li>
                      ))
                    ) : (
                      <p>No products available.</p>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
