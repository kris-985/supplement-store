import React, { useState } from "react";
// import { useCart } from './CartContext'; // Импортирай useCart хук
import { products } from "../utils";

const generateRandomStars = () => Math.floor(Math.random() * 6) + 1;

const ProductCard = ({
  product,
  handleAddToCart,
  comments,
  addComment,
  deleteComment,
}) => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    addComment(product.name, comment);
    setComment("");
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow red-shadow border-3 border border-danger">
        <img
          src={product.picture || "https://via.placeholder.com/150"}
          className="card-img-top"
          alt={product.name}
        />
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
          <div className="mt-3">
            <h6>Comments:</h6>
            <ul className="list-group mb-3">
              {comments.map((comment, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {comment}
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => deleteComment(product.name, index)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
            <form onSubmit={handleCommentSubmit}>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Leave a comment"
                value={comment}
                onChange={handleCommentChange}
              />
              <button type="submit" className="btn btn-danger btn-sm">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [productComments, setProductComments] = useState({});
  // const { dispatch } = useCart(); // Достъп до dispatch функцията

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products
    .map((product) => ({
      ...product,
      stars: generateRandomStars(),
    }))
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  const addComment = (productName, comment) => {
    setProductComments((prevComments) => ({
      ...prevComments,
      [productName]: [...(prevComments[productName] || []), comment],
    }));
  };

  const deleteComment = (productName, commentIndex) => {
    setProductComments((prevComments) => {
      const updatedComments = [...prevComments[productName]];
      updatedComments.splice(commentIndex, 1);
      return {
        ...prevComments,
        [productName]: updatedComments,
      };
    });
  };

  return (
    <div className="container my-5">
      <div className="row mb-4 justify-content-center">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control border-3 border border-danger"
            placeholder="Search for products"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="row">
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            handleAddToCart={handleAddToCart}
            comments={productComments[product.name] || []}
            addComment={addComment}
            deleteComment={deleteComment}
          />
        ))}
      </div>
    </div>
  );
};
