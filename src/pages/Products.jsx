import React, { useState } from "react";
import { products } from "../utils";
import { SingleProductCard } from "../components";

const generateRandomStars = () => Math.floor(Math.random() * 6) + 1;

export const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");

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
          <SingleProductCard
            key={index}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};
