import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(Link)`
  color: var(--text);
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 35px;
  }
`;

function Brand() {
  return (
    <StyledNavLink to="/">
          <img src="/logo.png" alt="logo" />
          <span>MapMate</span>
        </StyledNavLink>

  )
}

export default Brand;
