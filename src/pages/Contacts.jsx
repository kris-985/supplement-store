import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import styled from "styled-components";

const contactDetails = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    text: "123 Main Street, Sofia, Bulgaria",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    text: "+359 123 456 789",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    text: "info@healthstore.bg",
  },
  {
    icon: <FaClock />,
    title: "Working Hours",
    text: (
      <>
        <strong>Monday - Saturday:</strong> 09:00 - 18:00
        <br />
        <strong>Sunday:</strong> Closed
      </>
    ),
  },
];

export const Contacts = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <ImageContainer>
            <img
              src="https://help.openstreetmap.org/upfiles/Screenshot_2022-01-07_at_15.31.39.png"
              alt="Store"
              className="store-image"
            />
          </ImageContainer>
        </div>
        <div className="col-md-6">
          <h2 className="mb-4 text-danger">Our Store</h2>
          {contactDetails.map((detail, index) => (
            <div key={index} className="card border-light mb-3 shadow-lg">
              <div className="card-body border-3 border border-danger">
                <h5 className="card-title text-danger">
                  {detail.icon} {detail.title}
                </h5>
                <p className="card-text">{detail.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ImageContainer = styled.div`
  .store-image {
    max-height: 400px;
    object-fit: cover;
    width: 100%;
    border-radius: 0.25rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }
`;
