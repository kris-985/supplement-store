import React from "react";
import styled from "styled-components";
import { krisfit9, logo } from "../assets";

export const Footer = () => {
  return (
    <div>
      <FooterWrapper>
        <Container>
          <TopSection>
            <LogoContainer>
              <LogoImage src={logo} alt="Logo" />
            </LogoContainer>
            <NavContainer>
              <NavList>
                <h6>Navigation</h6>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/about">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/products">Products</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/contacts">Contacts</NavLink>
                </NavItem>
              </NavList>
              <ContactInfo>
                <h6>Get in touch</h6>
                <p>Address: 123 Street Name</p>
                <p>Email: example@example.com</p>
                <p>Phone: (123) 456-7890</p>
                <p>Monday - Saturday:</p> 09:00 - 18:00
              </ContactInfo>
            </NavContainer>
            <ImageContainer href="https://krisfit9.com/">
              <KRISFITImage src={krisfit9} alt="Krisfit9" />
              <Description>
                Personal training, consultations, and customized nutrition and
                exercise plans tailored to your goals.
              </Description>
            </ImageContainer>
          </TopSection>
        </Container>
      </FooterWrapper>
      <FooterBottom>&copy; 2024 ALL RIGHTS RESERVED.</FooterBottom>
    </div>
  );
};

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #c6d8e6;
  padding: 30px 0;
`;

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
`;

const TopSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const LogoContainer = styled.div`
  flex: 1;
  max-width: 200px;
`;

const LogoImage = styled.img`
  width: 100%;
  max-width: 200px;
`;

const NavContainer = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-evenly;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;

  h6 {
    font-size: 16px;
    margin-bottom: 15px;
    color: #333;
  }
`;

const NavItem = styled.li`
  margin: 10px 0;
`;

const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  font-size: 16px;
  &:hover {
    color: #000;
  }
`;

const ContactInfo = styled.div`
  text-align: center;
  h6 {
    margin-bottom: 10px;
    font-size: 16px;
    color: #333;
  }
  p {
    margin: 5px 0;
    font-size: 14px;
    color: #666;
  }
`;

const ImageContainer = styled.a`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-decoration: none;
`;

const KRISFITImage = styled.img`
  width: 80px;
  margin-bottom: 10px;
`;

const Description = styled.div`
  font-size: 14px;
  color: #333;
  max-width: 250px;
`;

const FooterBottom = styled.p`
  text-align: center;
  color: #333;
  font-size: 18px;
  margin: 0;
  padding: 10px 0;
  background-color: #eaeaea;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;