import { useState } from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Swal from "sweetalert2";

export const NewsletterForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      Swal.fire({
        title: "Error!",
        text: "Please enter your email address.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    Swal.fire({
      title: "Success!",
      text: "Successfully subscribed!",
      icon: "success",
      confirmButtonText: "OK",
    });

    setEmail("");
  };

  return (
    <NewsletterContainer className="my-5">
      <Title>Subscribe to Our Newsletter</Title>
      <Description>
        Be the first to know about current promotions, new items, news, and
        extra discounts.
      </Description>
      <Form
        className="d-flex flex-column align-items-center"
        onSubmit={handleSubmit}
      >
        <StyledFormGroup controlId="formEmail">
          <Form.Control
            type="email"
            placeholder="Enter your email"
            className="mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </StyledFormGroup>
        <StyledButton variant="danger" type="submit">
          Submit
        </StyledButton>
      </Form>
    </NewsletterContainer>
  );
};

const NewsletterContainer = styled(Container)`
  background-image: url("https://blog.iafstore.com/static/img/posts/image-1920/mxo1rxk0ehfj4vn57g3s.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 60px;
  border-radius: 8px;
  color: #fff;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 24px;
  color: #fff;
`;

const Description = styled.p`
  text-align: center;
  margin-bottom: 24px;
  color: #fff;
`;

const StyledFormGroup = styled(Form.Group)`
  width: 50%;

  @media (max-width: 768px) {
    width: 25%;
  }

  @media (max-width: 576px) {
    width: 75%;
  }
`;

const StyledButton = styled(Button)`
  width: 35%;

  @media (max-width: 768px) {
    width: 25%;
  }

  @media (max-width: 576px) {
    width: 50%;
  }
`;
