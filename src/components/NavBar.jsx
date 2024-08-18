import { NavLink } from "react-router-dom";
import { logo } from "../assets";
import styled from "styled-components";
import { Fragment, useContext } from "react";
import AppContext from "../context/AppContext";
import { logoutUser } from "../services/auth.services";

export const NavBar = () => {
  const { user, userData, setContext } = useContext(AppContext);

  const logout = () => {
    logoutUser().then(() => {
      setContext({ user: null, userData: null });
    });
  };

  return (
    <Wrapper className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <StyledNavLink className="navbar-brand" to="/">
          <LogoImage src={logo} alt="Logo" className="img-fluid" />
        </StyledNavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavItem>
              <NavLink className="nav-link fs-4" to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link fs-4" to="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link fs-4" to="/products">
                Products
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link fs-4" to="/contacts">
                Contacts
              </NavLink>
            </NavItem>
          </ul>
          <ButtonContainer>
            <NavButton to="/favorite" className="btn btn-outline-light">
              Favorite
            </NavButton>
            <NavButton to="/orderhistory" className="btn btn-outline-light">
              Order History
            </NavButton>
            <NavButton to="/cart" className="btn btn-outline-light">
              Cart
            </NavButton>
            {user ? (
              <Fragment>
                {userData.role === "admin" && (
                  <NavButton
                    to="/add-product"
                    className="btn btn-outline-light"
                  >
                    Add product
                  </NavButton>
                )}
                <NavButton to="/account" className="btn btn-outline-light">
                  Account
                </NavButton>
                <NavButton
                  to="/"
                  onClick={logout}
                  className="btn btn-outline-light"
                >
                  Log out
                </NavButton>
              </Fragment>
            ) : (
              <Fragment>
                <NavButton to="/signup" className="btn btn-outline-light">
                  Sign Up
                </NavButton>
                <NavButton to="/login" className="btn btn-outline-light">
                  Login
                </NavButton>
              </Fragment>
            )}
          </ButtonContainer>
        </div>
      </div>
    </Wrapper>
  );
};

const LogoImage = styled.img`
  max-width: 100px;
  width: 100%;
`;

const StyledNavLink = styled(NavLink)`
  .navbar-brand {
    display: flex;
    align-items: center;
  }
`;

const Wrapper = styled.div`
  background-color: #c6d8e6;
  padding: 0.5rem 1rem;
  .navbar-nav .nav-link {
    font-size: 1.1rem;
  }
`;

const NavItem = styled.li`
  .nav-link {
    font-size: 1.1rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: flex-end;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const NavButton = styled(NavLink)`
  font-size: 1rem;
  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
  }
`;
