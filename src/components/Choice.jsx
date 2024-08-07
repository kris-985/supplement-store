import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { Container, Row, Col, Card } from "react-bootstrap";

export const Choice = () => {
  return (
    <BackgroundContainer>
      <Container>
        <Title>Why Choose Us</Title>
        <Row>
          <Col md={6}>
            <StyledCard>
              <Card.Body>
                <CardTitle>Free Shipping</CardTitle>
                <CardText>
                  Enjoy the convenience of free shipping on all orders, no
                  matter the value. Our fast and reliable delivery service
                  ensures that your purchases arrive at your doorstep quickly
                  and safely. We believe in providing value to our customers,
                  which is why we cover the shipping costs for you. Whether
                  you're ordering a small item or a large one, you can count on
                  us to get it to you without any additional charges. Take
                  advantage of our free shipping offer today and experience a
                  hassle-free shopping journey with us.
                </CardText>
              </Card.Body>
            </StyledCard>
          </Col>
          <Col md={6}>
            <StyledCard>
              <Card.Body>
                <CardTitle>Consultations</CardTitle>
                <CardText>
                  Our team of experts is always ready to provide you with
                  professional consultations and advice tailored to your needs.
                  Whether you have questions about our products, need guidance
                  on making the best purchase, or require detailed information
                  on our services, we are here to help. Our consultation
                  services are designed to ensure that you make informed
                  decisions and get the most out of your purchases. Contact us
                  anytime for personalized assistance, and let us help you
                  achieve your goals with expert support and reliable advice.
                </CardText>
              </Card.Body>
            </StyledCard>
          </Col>
        </Row>
      </Container>
    </BackgroundContainer>
  );
};

const BackgroundContainer = styled.div`
  background-image: url("https://whitecares.com/wp-content/uploads/2022/08/AD-2-1.png");
  background-size: cover;
  background-position: center;
  padding: 50px 0;
`;

const StyledCard = styled(Card)`
  margin: 20px 0;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  background: rgba(255, 255, 255, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 40px;
  color: white;
`;

const CardTitle = styled(Card.Title)`
  color: white;
`;

const CardText = styled(Card.Text)`
  color: white;
`;
