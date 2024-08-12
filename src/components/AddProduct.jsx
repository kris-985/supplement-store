import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { storage } from "../firebase";
import {
  ref as storageRef,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";
import {
  addProduct,
  getproductById,
  updateProduct,
} from "../services/product.services";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import AppContext from "../context/AppContext";

export const AddProduct = () => {
  const { user } = useContext(AppContext);
  const [formImage, setFormImage] = useState({ image: null, imageURL: null });
  const [content, setContent] = useState({
    name: "",
    description: "",
    price: "",
  });
  const imageRef = useRef();
  const navigate = useNavigate();

  const onChange = (e) => {
    setContent({ ...content, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      ...content,
      name: content.name,
      description: content.description,
      price: content.price,
    };

    addProduct(productData, user).then((id) => {
      setContent({
        name: "",
        description: "",
        price: 0,
      });

      
      setFormImage({ ...formImage, imageURL: null });
      if (formImage.image) {
        getproductById(id).then((product) =>
        uploadPicture(id, product.content, formImage.image)
        );
      } else {
        navigate(`../products`);
      }
      
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Product added successfully!",
        showConfirmButton: false,
        timer: 2200,
      });
    });
  };
  
  const uploadPicture = (id, content, file) => {
    const storeLocation = storageRef(storage, `product-images/${id}`);
    uploadBytes(storeLocation, file)
    .then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        updateProduct(id, { ...content, picture: url }).then(() => {
          setFormImage({ image: null, imageURL: null });
          navigate(`../products`);
        });
      });
    })
    .catch(console.error);
  };
  
  const updatePhoto = (e) => {
    e.preventDefault();
    const file = imageRef.current.files?.[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("load", () => {
      setFormImage({ image: file, imageURL: reader.result });
    });
  };
  
  return (
    <CenteredContainer>
      <Card>
        <ImageContainer>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/037/201/289/small_2x/ai-generated-generative-ai-whey-protein-powder-sports-nutrition-banner-with-copy-space-photo.jpg"
            alt="Product"
          />
        </ImageContainer>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={content.name}
              onChange={onChange}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={content.description}
              onChange={onChange}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={content.price}
              onChange={onChange}
            />
          </FormGroup>
          {formImage.imageURL && <img src={formImage.imageURL} />}
          <div className="form-group m-2">
            <form>
              <label htmlFor="image">Image</label>
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="customFile"
                  ref={imageRef}
                  onChange={updatePhoto}
                />
                <label className="custom-file-label" htmlFor="customFile">
                  Choose file
                </label>
              </div>
            </form>
          </div>
          <CreateButton type="submit">Create Product</CreateButton>
          <CreateButton onClick={() => navigate(-1)}>Cancel</CreateButton>
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
