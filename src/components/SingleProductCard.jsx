import React from "react";
import { FaRegHeart } from "react-icons/fa";

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
            src={product.content.picture || "https://via.placeholder.com/150"}
            className="card-img-top"
            alt={product.content.name}
          />
          <button
            className="btn btn-transparent position-absolute top-0 end-0 m-2"
            onClick={() => handleAddToFavourites(product)}
            style={{ background: "transparent", border: "none" }}
          >
            <FaRegHeart size={30} color="red" />
          </button>
        </div>
        <div className="card-body d-flex flex-column">
          <div className="d-flex justify-content-between">
            <h5 className="card-title">{product.content.name}</h5>
            <span>
              {product.rating
                ? "⭐".repeat(product.rating)
                : "★".repeat(5)}
            </span>
          </div>
          <p className="card-text flex-grow-1">{product.content.description}</p>
          <h6 className="card-subtitle mb-2 text-muted">
            ${Number(product.content.price).toFixed(2)}
          </h6>
          <button
            className="btn btn-danger mt-auto"
            onClick={() => handleAddToCart(product)}
          >
            Buy now!
          </button>
        </div>
      </div>
    </div>
  );
};
