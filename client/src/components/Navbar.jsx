import { Link } from "react-router-dom";
import styled from "styled-components";
import Cta from "./Cta";
import { useEffect, useState } from "react";
import Hamburger from "./Hamburger";

const StyledNav = styled.nav`
  grid-column: 1/-1;
  grid-row: 1;
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  grid-template-rows: 5em;
  /* background-color: rgba(0, 0, 0, 0.5); */
  background-color: var(--background);
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  position: relative;
`;
const NavContent = styled.section`
  grid-column: 2;
  grid-row: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const NavList = styled.ul`
  list-style: none;

  position: absolute;
  top: 5.5em;
  right: 0%;

  background-color: var(--background-card);
  padding: 1em;
  border-radius: 0.4em;
  z-index: 10;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;

  &.closeMenu {
    right: 200%;
  }

  @media (min-width: 540px) {
    flex-direction: row;
    position: static;
    background-color: transparent;
    padding: 0;
  }
`;

const StyledNavLink = styled(Link)`
  color: var(--text);
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 0.5em; */
  img {
    width: 35px;
  }
`;

// const SCREEN_SIZE = 539;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((isOpen) => !isOpen);
  }

  useEffect(() => {

    const handleResize = () => {
      setIsOpen(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <StyledNav className="navbar">
      <NavContent>
        <StyledNavLink to="/">
          <img src="/logo.png" alt="logo" />
          <span>MapMate</span>
        </StyledNavLink>

        <Hamburger onToggleMenu={toggleMenu} isOpen={isOpen} />

        <NavList className={!isOpen ? "closeMenu" : ""}>
          <li className="navItem">
            <StyledNavLink to="/auth/signup">Signup</StyledNavLink>
          </li>
          <li className="navItem">
            <Cta href="/auth/login" content="Login" />
          </li>
        </NavList>
      </NavContent>
    </StyledNav>
  );
}

export default Navbar;
