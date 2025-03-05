import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { Container, Row, Col, Card } from "react-bootstrap";
import { content } from "../utils/helpers";

export const Choice = () => {
  return (
    <BackgroundContainer>
      <Container>
        <Title>Why Choose Us</Title>
        <Row>
          {content.map((item, index) => (
            <Col md={6} key={index}>
              <StyledCard>
                <Card.Body>
                  <CardTitle>{item.title}</CardTitle>
                  <CardText>{item.text}</CardText>
                </Card.Body>
              </StyledCard>
            </Col>
          ))}
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
  background: #dc3545;
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
