import React from "react";
import { FaStar } from "react-icons/fa";

export const SingleProductCard = ({
  product,
  handleAddToCart,
  handleAddToFavourites,
}) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow red-shadow border-3 border border-danger">
        <div className="position-relative">
          <img
            src={product.picture || "https://via.placeholder.com/150"}
            className="card-img-top"
            alt={product.name}
          />
          <button
            className="btn btn-transparent position-absolute top-0 end-0 m-2"
            onClick={() => handleAddToFavourites(product)}
            style={{ background: "transparent", border: "none" }}
          >
            <FaStar size={24} color="red" />
          </button>
        </div>
        <div className="card-body d-flex flex-column">
          <div className="d-flex justify-content-between">
            <h5 className="card-title">{product.name}</h5>
            <span>{"⭐".repeat(product.stars)}</span>
          </div>
          <p className="card-text flex-grow-1">{product.description}</p>
          <h6 className="card-subtitle mb-2 text-muted">
            ${product.price.toFixed(2)}
          </h6>
          <button
            className="btn btn-danger mt-auto"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
