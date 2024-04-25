/* eslint-disable react/prop-types */

import styled, { css } from "styled-components";

const StyledButton = styled.button`
  padding: 0.8em 1.9em;
  display: inline-block;
  font-size: 1rem;
  border-radius: 0.4em;
  background-color: #052659;
  color: var(--text);
  border: 1px solid transparent;
  transition: all 0.3s linear;
  width: 100%;

  &:hover {
    background-color: transparent;
    border: 1px solid var(--text);

  }


  ${(props) =>
    props.$primary &&
    css`
      background-color: #052659;
      color: #fbe4d8;
      &:hover {
        background-color: #2b124c;
      }
    `}

  ${(props) =>
    props.$primary &&
    css`
      color: blue;
    `}

  ${(props) =>
    props.$secondary &&
    css`
      background-color: transparent;
      display: flex;
      align-items: center;
      gap: 0.3em;
    `}
`;
function Button({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export default Button;
