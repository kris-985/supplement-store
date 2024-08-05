import React from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const HomeCarousel = () => {
  const images = [
    "https://www.ironbrothers-shop.com/cdn/shop/files/WheyProteinIsolate_ChocoholicChampion.png?v=1699889015&width=1080",
    "https://www.ironbrothers-shop.com/cdn/shop/files/WinterEdition_WheyProteinIsolate_Zimtstern.png?v=1699876022&width=1080",
    "https://xplosiv.nz/media/catalog/product/cache/aadd22f13385e97bd2c31bcb82066b4a/x/p/xplosivisolate2lb_vanillarender.png",
  ];

  return (
    <CarouselWrapper>
      <Carousel interval={2000} fade>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <CarouselImageWrapper>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="d-block w-100"
              />
            </CarouselImageWrapper>
          </Carousel.Item>
        ))}
      </Carousel>
    </CarouselWrapper>
  );
};

const CarouselImageWrapper = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
  }
`;

const CarouselWrapper = styled.div`
  position: relative;
  background-image: url('https://1stphorm.com/cdn/shop/collections/TestBoost.jpg?v=1715201965'); 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;

  .carousel-control-prev,
  .carousel-control-next {
    width: 5%;
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    background-color: black;
    border-radius: 50%;
  }
`;
