import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import styled from "styled-components";

const testimonials = [
  {
    name: "John Smith",
    review:
      "These supplements are amazing! I already feel much better after just a week. I have tried many products in the past, but nothing has worked as effectively as this. Highly recommend to anyone looking to improve their health.",
  },
  {
    name: "Mary Johnson",
    review:
      "Since I started using them, I have more energy throughout the day. My daily activities have become much easier to manage, and I no longer feel exhausted by the afternoon. This is a game-changer!",
  },
  {
    name: "George Brown",
    review:
      "I recommend them to everyone! The quality is top-notch and the benefits are undeniable. My overall well-being has improved significantly. It's worth every penny!",
  },
  {
    name: "Elena Davis",
    review:
      "Incredible product! I will keep using it because it has truly made a difference in my daily life. I feel more active, alert, and healthier overall. Can't imagine my routine without it.",
  },
  {
    name: "Nick Wilson",
    review:
      "Excellent value for money. I'm very satisfied with the results and the price point. It's rare to find such high-quality supplements at this price. Definitely a repeat customer.",
  },
  {
    name: "Daniela Martinez",
    review:
      "I've noticed significant improvement since I started taking them. My immune system feels stronger, and I haven't been sick once since I started. Thank you for such a great product!",
  },
  {
    name: "Alexander Garcia",
    review:
      "The supplements are very effective and easy to take. I appreciate the natural ingredients and the fact that they don't upset my stomach like other products I've tried. Fantastic results!",
  },
  {
    name: "Victoria Anderson",
    review:
      "I saw a difference in just one week. Highly recommend! My skin looks better, I sleep better, and I have more energy. This product has improved multiple aspects of my life.",
  },
  {
    name: "Stanley Taylor",
    review:
      "I'm very impressed with the results. Will order again. The changes I've seen in my health are nothing short of amazing. I feel rejuvenated and more vibrant every day.",
  },
  {
    name: "Anna Moore",
    review:
      "The product is very good and you can feel the difference. Excellent choice for anyone looking to boost their health. I can't believe how much better I feel after taking these supplements.",
  },
  {
    name: "Chris Evans",
    review:
      "These supplements have become a staple in my daily routine. I love how they make me feel more energetic and balanced. Highly recommend to anyone looking for a reliable health boost.",
  },
  {
    name: "Laura Taylor",
    review:
      "I was skeptical at first, but after a few weeks, I am convinced. My digestion has improved, and I have more stamina during workouts. These supplements are a must-have!",
  },
  {
    name: "James Wilson",
    review:
      "Fantastic product! I've tried many other brands, but none come close to the effectiveness of these supplements. My overall health has improved, and I feel more vibrant.",
  },
  {
    name: "Patricia Brown",
    review:
      "I can't say enough good things about these supplements. They've improved my mood, energy levels, and overall well-being. I feel like a new person. Highly recommend!",
  },
  {
    name: "Robert Johnson",
    review:
      "These supplements have exceeded my expectations. My focus and concentration have improved significantly. I feel more productive and motivated every day. A great addition to my health regimen.",
  },
];

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
