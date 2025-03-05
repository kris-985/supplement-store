import styled, { keyframes } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { partners } from "../utils/helpers";

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
