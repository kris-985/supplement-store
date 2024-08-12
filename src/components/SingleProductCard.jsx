import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import AppContext from "../context/AppContext";

export const SingleProductCard = ({
  product,
  handleAddToCart,
  like,
  dislike,
}) => {
  const { user } = useContext(AppContext);
  const isProductFavorite = product.likedBy.includes(user);
  const color = isProductFavorite ? "red" : "grey";
  const renderFavorite = () =>
    isProductFavorite ? dislike(product) : like(product);

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
            onClick={renderFavorite}
            className="btn btn-transparent position-absolute top-0 end-0 m-2"
            style={{ background: "transparent", border: "none" }}
          >
            <FaHeart size={30} color={color} />
          </button>
        </div>
        <div className="card-body d-flex flex-column">
          <div className="d-flex justify-content-between">
            <h5 className="card-title">{product.content.name}</h5>
            <span>
              {product.rating ? "⭐".repeat(product.rating) : "★".repeat(5)}
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
