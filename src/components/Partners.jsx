import React from "react";
import styled, { keyframes } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const partners = [
  {
    logo: "https://media.istockphoto.com/id/1369899988/vector/handshake-sign-in-the-circle-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=auA4GuM2p-EmKmEgcFjIOUibPiXsuvTxfvRKB-EN7o8=",
  },
  {
    logo: "https://images-platform.99static.com//QssdknHvUWVZfAL-AujVQVkqYQk=/393x3547:1106x4260/fit-in/500x500/99designs-contests-attachments/104/104799/attachment_104799702",
  },
  {
    logo: "https://i.pinimg.com/564x/26/30/a5/2630a52bd5a31c4d366be1685c4f7831.jpg",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOWtyjk6Pso05Vau09VvZUW1DTo-79Fu50u63C3d7oPWqMgC8NW4aF9zOg3ZBTT5tS4xA&usqp=CAU",
  },
  {
    logo: "https://images-platform.99static.com//9JL9sOc2J6lToGcs1HIACY3bN2Y=/245x133:749x637/fit-in/500x500/99designs-contests-attachments/58/58135/attachment_58135285",
  },
  {
    logo: "https://dcassetcdn.com/design_img/3806176/569983/23365972/z037bf00vdmgahjgpzvvj0w0wc_image.jpg",
  },
  {
    logo: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/muscle-and-workout-supplement-logo-design-template-f0916432c487f7ceb5151a559806a15e_screen.jpg?ts=1689029277",
  },
  {
    logo: "https://t4.ftcdn.net/jpg/01/56/84/65/360_F_156846577_KFaK8e8PNLRaImPZemqxjkVCaGuvPyAa.jpg",
  },
  {
    logo: "https://cdn.dribbble.com/users/5074949/screenshots/14145946/media/3a9dbf586daaca8ced30bc4935a0ee9e.jpg",
  },
  {
    logo: "https://cdn.dribbble.com/userupload/12785473/file/original-c50f5c42045bcd6741c6b91166cce4fe.png?resize=400x0",
  },
  {
    logo: "https://i.pinimg.com/originals/f6/8a/24/f68a249080a943372e6a234a51c8596a.png",
  },
  {
    logo: "https://e7.pngegg.com/pngimages/906/446/png-clipart-dietary-supplement-bodybuilding-com-logo-physical-fitness-bodybuilding-love-hand.png",
  },
];

export const Partners = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Our Partners</h2>
      <WhiteContainer>
        <ScrollingContainer>
          <LogoRow>
            {partners.map((partner, index) => (
              <PartnerImage key={index} src={partner.logo} />
            ))}
          </LogoRow>
        </ScrollingContainer>
      </WhiteContainer>
    </div>
  );
};

const scroll = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const WhiteContainer = styled.div`
  background-color: #fff;
  border: 2px solid red;
  padding: 20px;
  border-radius: 10px;
`;

const ScrollingContainer = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
`;

const LogoRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  animation: ${scroll} 30s linear infinite;
  width: max-content;

  &:hover {
    animation-play-state: paused;
  }
`;

const PartnerImage = styled.img`
  max-width: 100px;
  height: auto;
  margin: 0 20px;
`;
