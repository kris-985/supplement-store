import { Fragment } from "react";
import {
  Choice,
  HomeCarousel,
  NewsletterForm,
  Partners,
  PromoSlider,
  Survey,
  TestimonialsSlider,
} from "../components";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { products, serviceItems, statsItems } from "../utils";
import ServiceItem from "./ServiceItem";
import Carousel from "react-bootstrap/Carousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AnimatedCounter } from "../components/AnimatedCounter";
import { fitart } from "../assets";

export const Home = () => {
  return (
    <Fragment>
      <HomeCarousel />
      <StyledParallaxSection>
        <InnerWrapper className="parallax" />
        <StyledTextCenter>
          <SmallImage src={fitart} alt="" />
          <h1 className="display-3 text-light fw-bold">
            INNOVATION IS OUR STRENGTH
          </h1>
          <NavLink
            to="/about"
            className="btn btn-danger btn-lg fw-bold mt-3 shadow-sm text-uppercase rounded-pill"
          >
            About
          </NavLink>
        </StyledTextCenter>
      </StyledParallaxSection>
      <StyledSeparator />
      <ImageContainer>
        <TextOverlay>
          <h1>The Best Supplements for You!</h1>
          <p>
            Discover our range of high-quality supplements, specially selected
            for your needs.
          </p>
          <NavLink
            to="/Products"
            className="btn btn-danger btn-lg fw-bold mt-3 shadow-sm text-uppercase rounded-pill"
          >
            Products
          </NavLink>
        </TextOverlay>
      </ImageContainer>
      <StyledSeparator />
      <div className="container my-5">
        <h2 className="text-center mb-4 fw-bold">Most Ordered Products</h2>
        <Carousel
          nextIcon={
            <FaChevronRight style={{ color: "black", fontSize: "2rem" }} />
          }
          prevIcon={
            <FaChevronLeft style={{ color: "black", fontSize: "2rem" }} />
          }
          indicators={false}
        >
          {products.map((product, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex flex-column align-items-center">
                <img
                  src={product.picture}
                  className="d-block"
                  alt={product.name}
                  style={{
                    width: "350px",
                    height: "350px",
                    objectFit: "cover",
                  }}
                />
                <h5 className="mt-3">{product.name}</h5>
                <p>{product.description}</p>
                <p>
                  <strong>Price: ${product.price}</strong>
                </p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="container my-5">
        <div className="row justify-content-center">
          {serviceItems.map((e, i) => (
            <ServiceItem
              key={i}
              location={e.location}
              imgSrc={e.imgSrc}
              label={e.label}
              text={e.text}
              style={e.style}
            />
          ))}
        </div>
      </div>
      <PromoSlider />
      <div className="container my-5">
        <div className="text-center mb-5">
          <img
            src="https://www.newbreedrevenue.com/hs-fs/hubfs/shutterstock_695711272.jpg?width=5001&name=shutterstock_695711272.jpg"
            alt="Supplements"
            className="img-fluid rounded shadow-lg"
          />
        </div>
        <div className="row text-center g-4">
          {statsItems.map((item, index) => (
            <div key={index} className="col-md-3">
              <div className="bg-light p-4 rounded shadow-sm">
                <h1 className="display-4 text-danger">
                  <AnimatedCounter end={item.count} />
                </h1>
                <h5 className="mt-2">{item.label}</h5>
                <p className="text-muted mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <TestimonialsSlider />
      <Partners />
      <NewsletterForm />
      <Survey />
      <Choice />
    </Fragment>
  );
};

const StyledParallaxSection = styled.div`
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  text-align: center;
  color: white;
  height: 100vh;
  overflow: hidden;
`;

const StyledTextCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 1rem;
`;

const InnerWrapper = styled.div`
  background-image: url("https://static.vecteezy.com/system/resources/previews/003/479/070/non_2x/top-view-whey-protein-scoop-on-dark-background-copy-space-photo.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const SmallImage = styled.img`
  display: block;
  margin: -330px auto 1rem auto;
  width: 600px;
  max-width: 650px;
  height: auto;

  @media (max-width: 768px) {
    margin: -200px auto 1rem auto;
    width: 80%;
  }

  @media (max-width: 576px) {
    margin: -150px auto 1rem auto;
    width: 90%;
  }
`;

const StyledSeparator = styled.div`
  height: 40px;
  background: repeating-linear-gradient(
    -45deg,
    #fff,
    #fff 6px,
    #c5c5c5 9px,
    #c5c5c5 7px
  );
  background-color: #fff;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 700px;
  background: url("https://images.unsplash.com/photo-1693996045300-521e9d08cabc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
    no-repeat center center;
  background-size: cover;
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5); /* Полупрозрачен фон */
  border-radius: 10px;
`;
