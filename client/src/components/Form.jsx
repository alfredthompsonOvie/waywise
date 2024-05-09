import styled, { css } from "styled-components";


const Form = styled.form`
  grid-column: 2;
  grid-row: 2;

  padding: ${props=> props.$signup || "1em 1.5em"};
  max-width: 25em;
  width: 100%;
  margin: 4em auto;
  border-radius: .4em;
  align-self: center;
  background-color: var(--secondary-alt);
  background-color: var(--secondary);
  color: var(--text);

  /* ${(props) => {
    switch (props.$mode) {
      case "auth":
        return css`
          padding: 1em;
          margin: 1em 0;
        `;
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
  }} */
`;

export default Form;
