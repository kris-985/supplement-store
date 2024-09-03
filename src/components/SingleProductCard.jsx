import React, { useContext, useState } from "react";
import { FaHeart } from "react-icons/fa";
import AppContext from "../context/AppContext";
import { addToCart, renderFavorite } from "../services/product.services";

export const SingleProductCard = ({ product, like, dislike }) => {
  const { user } = useContext(AppContext);
  const [quantity, setQuantity] = useState(1);
  const isProductFavorite = product.likedBy.includes(user);
  const color = isProductFavorite ? "red" : "grey";

  const toggleFavorite = () =>
    isProductFavorite ? dislike(product) : like(product);

  const handleFavorite = () => {
    renderFavorite(isProductFavorite, user, product).then(() => {
      toggleFavorite();
    });
  };

  const handleQuantityChange = (amount) => {
    if (quantity + amount >= 1) {
      setQuantity(quantity + amount);
    }
  };

  const handleBuyNow = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;

      addToCart(user, product, newQuantity);

      return newQuantity;
    });
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow red-shadow border-3 border border-danger min-h-400 min-w-400">
        <div className="position-relative">
          <img
            src={product.content.picture || "https://via.placeholder.com/400"}
            className="card-img-top"
            alt={product.content.name}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
          <button
            onClick={handleFavorite}
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
          <div className="d-flex justify-content-between align-items-center mb-3">
            <button
              className="btn btn-outline-secondary"
              onClick={() => handleQuantityChange(-1)}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              className="btn btn-outline-secondary"
              onClick={() => handleQuantityChange(1)}
            >
              +
            </button>
          </div>
          <button className="btn btn-danger mt-auto" onClick={handleBuyNow}>
            Buy now!
          </button>
        </div>
      </div>
    </div>
  );
};
