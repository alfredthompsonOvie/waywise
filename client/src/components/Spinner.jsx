/* eslint-disable react/prop-types */
import styled, { css, keyframes } from "styled-components";

const SpinnerContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const rotate = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

const StyledSpinner = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background: conic-gradient(#0000 10%, var(--background));
  
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
animation: ${ rotate } 1.5s infinite linear;
  
  ${props => props.$customerForm && css`
    background: conic-gradient(#0000 10%, var(--text));
    -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
    animation: ${ rotate } 1.5s infinite linear;
  `}
`;

function Spinner({customerForm}) {
  return (
    <SpinnerContainer>
      <StyledSpinner $customerForm={customerForm } />
    </SpinnerContainer>
  );
}

export default Spinner;
