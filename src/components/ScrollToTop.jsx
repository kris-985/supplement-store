import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { FaArrowUp } from "react-icons/fa";
import { scrollToTop } from "../utils/helpers";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300)
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <ScrollButton onClick={scrollToTop} isVisible={isVisible}>
      <FaArrowUp />
    </ScrollButton>
  );
};

const moveUpDown = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
}`;

const ScrollButton = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 50px;
  height: 50px;
  background-color: #DC3545;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  transition: opacity 0.5s, visibility 0.5s;
  z-index: 1000;
  animation: ${moveUpDown} 2s infinite;

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    font-size: 20px;
  }

  @media (max-width: 480px) {
    bottom: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    font-size: 16px;
  }
`;
