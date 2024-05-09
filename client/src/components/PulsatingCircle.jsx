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

const PulsatingCircle = styled.section`
  /* width: 100px;
  height: 100px;
  background-color: #3498db; 
  border-radius: 50%; */
  animation: ${pulseAnimation} 2s infinite; /* Apply the animation */

  background-color: var(--background);
padding: 1em;
border-radius: 50%;
width: 50px;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
/* background-color: red; */
position: absolute;
left: 95%;
left: 29em;
left: 100%;
top: 2em;
left: 1.5em;

z-index: 100;


transform: rotate(0deg);
animation: ${pulseAnimation} 2s infinite; 
transition: transform 0.5s; 
cursor: pointer;

${({ rotate }) => rotate && `
    animation: ${rotateAnimation} 1s linear; /* Apply the rotation animation when rotate is true */
  `}


  &.isOpen {
    position: absolute;
    transform: rotate(180deg);
    left: 18em;
    background-color: var(--secondary);
  }


`;


export default PulsatingCircle;
