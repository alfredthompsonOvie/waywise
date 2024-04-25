import { Link } from "react-router-dom";
import styled from "styled-components";
import Cta from "./Cta";

const StyledNav = styled.nav`
  grid-column: 1/-1;
  grid-row: 1;
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  grid-template-rows: 5em;
  position: relative;
`;
const NavList = styled.ul`
  grid-column: 2;
  grid-row: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

const StyledNavLink = styled(Link)`
  color: var(--text);
`

function Navbar() {
  return (
    <StyledNav className="navbar">
      <NavList className="navList">
        <li className="navItem">
          <StyledNavLink to="/">
            Home
          </StyledNavLink>
        </li>
        <li className="navItem">
          <Cta href="/auth/login" content="Login" />
        </li>
      </NavList>
    </StyledNav>
  );
}

export default Navbar;
