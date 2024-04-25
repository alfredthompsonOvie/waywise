/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledHeading = styled.h1`
  text-transform: capitalize;
  font-size: clamp(1.5rem, 6vw, 2.5rem);
  margin-bottom: 0.3em;
  @media (min-width: 56.25em) {
    font-size: 1.5rem;
  }
`;

function FormTitle({ title }) {

  return <StyledHeading>{title}</StyledHeading>;
}

export default FormTitle;
