/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledCta = styled(Link)`
  background-color: var(--accent);
  color: var(--background);
  padding: 0.5em 1em;
  border-radius: 0.4em;
  display: inline-block;
  position: relative;

  ${(props) => {
    switch (props.$mode) {
      case "secondary":
        return css`
          background-color: transparent;
          padding: 0;
          color: var(--primary);
          text-decoration: underline;
        `;
      default:
        return css`
          background-color: var(--primary);
          color: var(--background);
        `;
    }
}}
  
`;
function Cta({ href, content, mode }) {
  return <StyledCta to={href} $mode={mode}>{content}</StyledCta>;
}

export default Cta;
