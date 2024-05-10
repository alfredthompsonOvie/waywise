/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";

const StyledHeading = styled.h1`
  text-transform: capitalize;
  font-size: clamp(1.5rem, 6vw, 2.5rem);
  margin-bottom: 0.3em;
  ${props => props.$mode === "customerDetails" && css`
    font-size: 1.5rem;
    margin: 0  0 .5em;
  `}
  @media (min-width: 56.25em) {
    font-size: 3rem;
  }
`;

function FormTitle({ title, mode}) {

  return <StyledHeading $mode={mode}>{title}</StyledHeading>;
}

export default FormTitle;
