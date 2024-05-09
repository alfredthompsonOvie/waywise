import styled from "styled-components";

const Heading = styled.h1`
  font-size: clamp(1.5rem, 6vw, 2.5rem);
  margin-bottom: 0.3em;
  /* color: var(--text); */
  position: relative;

  background: #121FCF;
  background: linear-gradient(to right, #121FCF 0%, #CF1512 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;




  @media (min-width: 56.25em) {
    font-size: 1.5rem;
  }


  @media (min-width: 800px) {
    grid-column: 1;

    align-self: center;
    justify-self: start;
    text-align: left;


    &::before {
      background-color: transparent;
    }

    font-size: 3rem;
  }
`;

export default Heading;