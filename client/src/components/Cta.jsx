/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledCta = styled(Link)`
  background-color: var(--accent);
  color: var(--background);
  padding: 0.5em 1em;
  border-radius: 0 0.4em;
  display: inline-block;
  position: relative;

  ${(props) => {
    switch (props.$mode) {
      case "secondary":
        return css`
          background-color: transparent;
          padding: 0;
        `;
      default:
        return css`
          background-color: var(--accent);
        `;
    }
  }}
`;
function Cta({ href, content }) {
  return <StyledCta to={href}>{content}</StyledCta>;
}

export default Cta;
