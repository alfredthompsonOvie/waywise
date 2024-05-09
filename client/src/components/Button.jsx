/* eslint-disable react/prop-types */

import styled, { css } from "styled-components";

const Button = styled.button`
  border-radius: 0.4em;
  border: 1px solid transparent;
  transition: all 0.3s linear;
  width: 100%;
  padding: 0.8em 1.9em;
  font-size: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3em;



  /* ${(props) =>
    props.$primary &&
    css`
      background-color: #052659;
      color: #fbe4d8;
      &:hover {
        background-color: #2b124c;
      }
    `} */
  /* 
 */

  /* ${(props) =>
    props.$secondary &&
    css`
      background-color: transparent;
      display: flex;
      align-items: center;
      gap: 0.3em;
    `} */

  ${(props) => {
    switch (props.$mode) {
      case "primary":
        return css`
          background-color: transparent;
          padding: 0;
          color: var(--primary);
          text-decoration: underline;
        `;
      case "secondary":
        return css`
          background-color: transparent;
          padding: 0;
          color: var(--primary);
          /* text-decoration: underline; */
        `;
      default:
        return css`
          background-color: var(--primary);
          color: var(--background);
          /* border-radius: 5em; */
          &:hover {
    background-color: transparent;
    border: 1px solid var(--text);
    color: var(--text);

  }
        `;
    }
  }}
`;
// function Button({ children, onClick, mode }) {
//   return <StyledButton onClick={onClick} $mode={mode}>{children}</StyledButton>;
// }

export default Button;
