import React, { Fragment } from "react";
import { FaTimes } from "react-icons/fa";

export const SingleCartCard = ({ purchasedProducts, setPurchasedProducts }) => {
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
    </Fragment>
  );
};
