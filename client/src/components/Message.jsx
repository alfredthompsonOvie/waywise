/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";

const StyledMessage = styled.p`
  ${(props) => {
    switch (props.$mode) {
      case "secondary":
        return css`
          background-color: transparent;
          padding: 0;
          color: var(--primary);
          color: var(--accent);
          font-size: 2rem;
          text-align: center;

        `;
      case "auth":
        return css`
          font-size: 1rem;
          text-align: left;
          margin: 1em 0;
        `;
      default:
        return css`
          background-color: var(--primary);
          color: var(--background);
          text-align: center;
          font-size: 1.8rem;
          width: 80%;
          margin: 2rem auto;
          font-weight: 600;
        `;
    }
  }}
`;
function Message({ message, mode }) {
  return (
    <StyledMessage $mode={mode}>
      <span role="img">👋</span> 
      <span> {message}</span>
    </StyledMessage>
  );
}

export default Message;
