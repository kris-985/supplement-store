import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export const NewsletterForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Successfully subscribed!");
    setEmail("");
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Subscribe to Our Newsletter</h2>
      <p className="text-center mb-4">
        Be the first to know about current promotions, new items, news, and
        extra discounts.
      </p>
      <Form
        className="d-flex flex-column align-items-center"
        onSubmit={handleSubmit}
      >
        <Form.Group controlId="formEmail" className="w-25">
          <Form.Control
            type="email"
            placeholder="Enter your email"
            className="mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Button variant="danger" type="submit" className="w-15">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
