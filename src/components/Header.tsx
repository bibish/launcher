import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 100;
`;

const Logo = styled.div`
  font-size: 2.5rem;
  font-family: var(--font-pixel);
  color: var(--primary-color);
  text-shadow: var(--glow-shadow);
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Nav = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--secondary-color);
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NavLink = styled.li`
  font-family: var(--font-retro);
  font-size: 1.2rem;

  a {
    color: var(--secondary-color);
    text-shadow: 0 0 10px var(--secondary-color);
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 2px;

    &:hover {
      color: var(--primary-color);
      text-shadow: 0 0 10px var(--primary-color);
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: var(--secondary-color);
  font-size: 1.5rem;
  cursor: pointer;
`;

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [glitchEffect, setGlitchEffect] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchEffect(true);
      setTimeout(() => {
        setGlitchEffect(false);
      }, 200);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <HeaderContainer>
      <Logo className={glitchEffect ? "glitch" : ""} data-text="ALLTHINGS">
        ALLTHINGS
      </Logo>

      <Nav>
        <NavLinks>
          <NavLink>
            <Link to="/">Home</Link>
          </NavLink>
          <NavLink>
            <Link to="/about">About</Link>
          </NavLink>
          <NavLink>
            <Link to="/team">Team</Link>
          </NavLink>
          <NavLink>
            <Link to="/features">Features</Link>
          </NavLink>
        </NavLinks>
      </Nav>

      <MobileMenuButton onClick={toggleMobileMenu}>Menu</MobileMenuButton>

      <MobileMenu isOpen={mobileMenuOpen}>
        <CloseButton onClick={toggleMobileMenu}>Close</CloseButton>
        <NavLinks>
          <NavLink>
            <Link to="/" onClick={toggleMobileMenu}>
              Home
            </Link>
          </NavLink>
          <NavLink>
            <Link to="/about" onClick={toggleMobileMenu}>
              About
            </Link>
          </NavLink>
          <NavLink>
            <Link to="/team" onClick={toggleMobileMenu}>
              Team
            </Link>
          </NavLink>
          <NavLink>
            <Link to="/features" onClick={toggleMobileMenu}>
              Features
            </Link>
          </NavLink>
        </NavLinks>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;
