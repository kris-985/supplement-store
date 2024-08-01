import React, { useState } from 'react';
// import { useCart } from './CartContext'; // Импортирай useCart хук
import { products } from '../utils';

export const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  // const { dispatch } = useCart(); // Достъп до dispatch функцията

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
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
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100 shadow red-shadow border-3 border border-danger">
              <img
                src={product.picture || 'https://via.placeholder.com/150'}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text flex-grow-1">{product.description}</p>
                <h6 className="card-subtitle mb-2 text-muted">${product.price.toFixed(2)}</h6>
                <button className="btn btn-danger mt-auto" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
