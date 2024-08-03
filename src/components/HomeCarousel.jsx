import React from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const HomeCarousel = () => {
  const images = [
    "https://www.ironbrothers-shop.com/cdn/shop/files/WheyProteinIsolate_ChocoholicChampion.png?v=1699889015&width=1080",
    "https://www.ironbrothers-shop.com/cdn/shop/files/WinterEdition_WheyProteinIsolate_Zimtstern.png?v=1699876022&width=1080",
    "https://dukaan.b-cdn.net/700x700/webp/upload_file_service/asg/77553bd4-c99b-4828-b22f-20e6898a318d/Dexter-Jackson-Isolate-04.jpg",
    "https://xplosiv.nz/media/catalog/product/cache/aadd22f13385e97bd2c31bcb82066b4a/x/p/xplosivisolate2lb_vanillarender.png",
  ];

  return (
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
