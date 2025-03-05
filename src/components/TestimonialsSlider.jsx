import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import { testimonials } from "../utils/helpers";

export const TestimonialsSlider = () => {
  return (
    <CarouselContainer>
      <h1 className="text-center text-light my-5">Customer Testimonials</h1>
      <StyledCarousel
        indicators={false}
        prevIcon={
          <span aria-hidden="true" className="carousel-control-prev-icon" />
        }
        nextIcon={
          <span aria-hidden="true" className="carousel-control-next-icon" />
        }
        interval={5000}
        controls={false}
      >
        {testimonials.map((testimonial, index) => (
          <Carousel.Item key={index}>
            <div>
              <StyledCard>
                <Card.Body>
                  <Card.Text>{testimonial.review}</Card.Text>
                  <Card.Title>- {testimonial.name}</Card.Title>
                </Card.Body>
              </StyledCard>
            </div>
          </Carousel.Item>
        ))}
      </StyledCarousel>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  background: url("https://1stphorm.com/cdn/shop/collections/Meal_Replacement_Protein.jpg?v=1715201890")
    no-repeat center center;
  background-size: cover;
  padding: 2rem 0;
`;

const StyledCarousel = styled(Carousel)`
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    background-color: rgba(0, 0, 0, 0.5);
  }

  .carousel-item div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .carousel-item p {
    font-style: italic;
    font-size: 1.1rem;
  }

  .carousel-item h5 {
    margin-top: 0.5rem;
    font-weight: bold;
  }
`;

const StyledCard = styled(Card)`
  background: rgba(0, 0, 0, 0.7);
  border: none;
  color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  width: 80%;
  max-width: 600px;
  height: auto;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
