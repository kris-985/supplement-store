import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
// import { useCart } from './CartContext';

const Container = styled.div`
  padding: 20px;
`;

export const Cart = () => {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();

  const handleRemoveItem = (item) => {
    dispatch({ type: 'REMOVE_ITEM', payload: item });
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <Container>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id}>
              <span>{item.name}</span>
              <button onClick={() => handleRemoveItem(item)}>Remove</button>
            </div>
          ))}
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      )}
    </Container>
  );
};
