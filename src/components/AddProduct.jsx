import React, { useState } from "react";
import styled from "styled-components";
import { ref, set } from "firebase/database";
import { db } from "../firebase";

export const AddProduct = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!image || !name || !description || !price) {
      alert("Please fill out all fields.");
      return;
    }

    const productId = Date.now(); 

    const productRef = ref(db, 'products/' + productId);

    const productData = {
      image,
      name,
      description,
      price,
    };

    try {
      await set(productRef, productData);
      alert("Product created successfully!");

      setImage("");
      setName("");
      setDescription("");
      setPrice("");
    } catch (error) {
      console.error("Error creating product: ", error);
      alert("Failed to create product.");
    }
  };

  return (
    <CenteredContainer>
      <Card>
        <ImageContainer>
          <img
            src={image || "https://static.vecteezy.com/system/resources/thumbnails/037/201/289/small_2x/ai-generated-generative-ai-whey-protein-powder-sports-nutrition-banner-with-copy-space-photo.jpg"}
            alt="Product"
          />
        </ImageContainer>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <label htmlFor="image">Image URL:</label>
            <input
              type="text"
              id="image"
              name="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </FormGroup>
          <CreateButton type="submit">Create Product</CreateButton>
        </Form>
      </Card>
    </CenteredContainer>
  );
};

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Card = styled.div`
  width: 650px;
  padding: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: white;
  text-align: center;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 250px;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  label {
    margin-bottom: 5px;
    font-size: 14px;
    font-weight: bold;
  }

  input,
  textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
  }

  textarea {
    resize: none;
  }
`;

const CreateButton = styled.button`
  background-color: red;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    background-color: darkred;
  }
`;

