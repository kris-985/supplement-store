import React, { Fragment, useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { setShoppingCart } from "../services/product.services";
import AppContext from "../context/AppContext";

export const SingleCartCard = ({ purchasedProducts, setPurchasedProducts }) => {
  const { user } = useContext(AppContext);

  const changeQuantity = (product, newQuantity) => {
    const newItems = { ...purchasedProducts };
    newItems[product.id].quantity = newItems[product.id].quantity
      ? Number(newQuantity)
      : product.quantity;
    console.log(newQuantity);
    setShoppingCart(user, { ...newItems });
    setPurchasedProducts(newItems);
  };

  const removeProduct = (product) => {
    const newItems = { ...purchasedProducts };
    delete newItems[product];
    setShoppingCart(user, { ...newItems });
    setPurchasedProducts(newItems);
  };

  return (
    <Fragment>
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
                  <h5 className="card-title">{product.content?.name}</h5>
                  <p className="card-text text-muted">
                    ${product.content?.price}
                  </p>
                  <div className="d-flex align-items-center mb-3">
                    <label className="me-2" htmlFor={`quantity-${product.id}`}>
                      Quantity:
                    </label>
                    <input
                      type="number"
                      id={`quantity-${product.id}`}
                      min="1"
                      value={product.quantity}
                      onChange={(e) => changeQuantity(product, e.target.value)}
                      className="form-control w-25"
                    />
                  </div>
                  <button
                    className="btn btn-outline-danger position-absolute top-0 end-0 m-2"
                    onClick={() => removeProduct(product.id)}
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
    </Fragment>
  );
};
