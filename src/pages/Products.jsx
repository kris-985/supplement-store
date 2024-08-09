import React, { useEffect, useState } from "react";
import { SingleProductCard } from "../components";
import {
  fromProductsDocument,
  getAllProducts,
  getLiveTweets,
} from "../services/product.services";

export const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    getAllProducts().then(setProducts).catch(console.error);
  }, []);

  useEffect(() => {
    const unsubscribe = getLiveTweets((snapshot) => {
      if (snapshot.exists()) setProducts(fromProductsDocument(snapshot));
    });

    return () => unsubscribe();
  }, []);
  
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
        {!products.length ? (
          <h1>No Products</h1>
        ) : (
          products.map((product, index) => (
            <SingleProductCard
              key={index}
              product={product}
              handleAddToCart={() => console.log("hello")}
            />
          ))
        )}
      </div>
    </div>
  );
};
