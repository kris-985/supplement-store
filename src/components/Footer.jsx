import styled from "styled-components";
import { krisfit9, logo } from "../assets";
import { NavLink as RouterNavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <div>
      <FooterWrapper>
        <Title>We are FitArt</Title>
        <Container>
          <TopSection>
            <LogoContainer>
              <LogoImage src={logo} alt="Logo" />
            </LogoContainer>
            <NavContainer>
              <NavList>
                <h6>Navigation</h6>
                <NavItem>
                  <StyledNavLink to="/">Home</StyledNavLink>
                </NavItem>
                <NavItem>
                  <StyledNavLink to="/about">About</StyledNavLink>
                </NavItem>
                <NavItem>
                  <StyledNavLink to="/products">Products</StyledNavLink>
                </NavItem>
                <NavItem>
                  <StyledNavLink to="/contacts">Contacts</StyledNavLink>
                </NavItem>
              </NavList>
              <ContactInfo>
                <h6>Get in touch</h6>
                <p>Address: 23 Dobri Voynikov, Sofia</p>
                <p>Email: info@fitart.bg</p>
                <p>Phone: +359 123 456 789</p>
                <p>Monday - Saturday: 09:00 - 18:00</p>
              </ContactInfo>
            </NavContainer>
            <ImageContainer href="https://github.com/kris-985/krisfit9">
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

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

const Title = styled.h1`
  color: #dc3545;
  text-align: center;
  padding-bottom: 3rem;
  text-decoration: underline;

  @media (max-width: 768px) {
    font-size: 24px;
    padding-bottom: 2rem;
  }
`;

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const TopSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LogoContainer = styled.div`
  flex: 1;
  max-width: 200px;

  @media (max-width: 768px) {
    max-width: 150px;
  }
`;

const LogoImage = styled.img`
  width: 100%;
  max-width: 200px;

  @media (max-width: 768px) {
    max-width: 150px;
  }
`;

const NavContainer = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  h6 {
    font-size: 16px;
    margin-bottom: 15px;
    color: #333;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const NavItem = styled.li`
  margin: 10px 0;
`;

const StyledNavLink = styled(RouterNavLink)`
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
    color: black;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
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

  @media (max-width: 768px) {
    width: 60px;
  }
`;

const Description = styled.div`
  font-size: 14px;
  color: #333;
  max-width: 250px;

  @media (max-width: 768px) {
    font-size: 12px;
    max-width: 200px;
  }
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
    padding: 8px 0;
  }
`;
