import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { promotions } from "../utils/helpers";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

export const PromoSlider = () => {
  return (
    <SliderContainer>
      <Slider {...sliderSettings}>
        {promotions.map((promo, index) => (
          <Slide key={index}>
            <PromoText>
              <ProductName>{promo.name}</ProductName>
              <Discount>{promo.discount}</Discount>
              <Description>{promo.description}</Description>
            </PromoText>
          </Slide>
        ))}
      </Slider>
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  width: 80%;
  margin: 50px auto;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  overflow: hidden;
  background-image: url("https://t3.ftcdn.net/jpg/05/11/56/80/360_F_511568075_6sBuPMXT4oMlnTrxd143Nuc55C4u1oXq.jpg");
  background-size: cover;
  background-position: center;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.66);
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const PromoText = styled.div`
  text-align: center;
  color: #333;
`;

const ProductName = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Discount = styled.p`
  font-size: 18px;
  color: #e63946;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 16px;
  color: #555;
`;
