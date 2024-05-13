/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import styled, { keyframes } from 'styled-components';

const pulseAnimation = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(241, 170, 155, 0.7);
  }
  
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }
  
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
`;

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  
  to {
    transform: rotate(180deg);
  }
`;

const StyledButton = styled.section`
display: flex;
justify-content: center;
align-items: center;
padding: 1em;

width: 50px;
height: 50px;
border-radius: 50%;

position: absolute;
left: 95%;
left: 29em;
left: 100%;
top: 5.5em;
left: 1.5em;

z-index: 100;


background-color: var(--background);
/* background-color: #3498db;  */
/* background-color: red; */

animation: ${pulseAnimation} 2s infinite; 

transform: rotate(0deg);
/* transition: transform 0.5s;  */

cursor: pointer;

${({ rotate }) => rotate && `
    animation: ${rotateAnimation} 1s linear; /* Apply the rotation animation when rotate is true */
  `}


  &.isOpen {
    position: absolute;
    transform: rotate(0deg);
    left: 18em;
    top: 2em;

    background-color: var(--secondary);
  }


`;

const Arrow = styled(FaChevronLeft)`
  transform: rotate(180deg)

  /* .isOpen & {
    transform: rotate(0deg)
  } */
`

const SCREEN_SIZE = 900;

function PulsatingCircleButton({ onHandleClick, isFormOpen }) {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < SCREEN_SIZE);

  useEffect(() => { 
    function handleResize() {
      setIsMobile(window.innerWidth < SCREEN_SIZE);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [])

  return (
    <>
    {isMobile && <StyledButton onClick={onHandleClick} className={isFormOpen ? "isOpen" : ""}>
      <Arrow  />
    </StyledButton>}
    </>
  );
}

export default PulsatingCircleButton;
