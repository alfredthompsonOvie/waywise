import Cta from "../components/Cta";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const StyledHome = styled.section`
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  grid-template-rows: 5em calc(100vh - 5em);

  min-height: 100vh;

  position: relative;

  /* &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  } */
`;
const StyledMain = styled.main`
  grid-column: 2;
  grid-row: 2;
`;

const Contents = styled.section`
  padding: 1em 0;

  text-align: center;
  position: relative;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 45vh auto;
  /* gap: .5em; */
  align-items: center;

  overflow: hidden;

  @media (min-width: 540px) {
    padding: 0;
    grid-template-rows: calc(100vh - 5em);
  }
`;

const Illustration = styled.section`
  grid-column: 1/-1;
  grid-row: 1;

  max-width: 15em;
  margin-inline: auto;
  overflow: hidden;

  img {
    object-fit: cover;
    object-position: center;
  }

  @media (min-width: 540px) {
    max-width: 30em;
    grid-row: 1;
  }

  @media (min-width: 800px) {
    grid-column: 2;
  }
`;
const Description = styled.section`
  padding: 1em;
  grid-column: 1/-1;
  grid-row: 2;

  max-width: 25em;
  width: 100%;

  align-self: center;
  justify-self: center;
  position: relative;

  p {
    position: relative;
    margin-bottom: 2em;
  }

  @media (min-width: 540px) {
    grid-row: 1;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;

      background-color: var(--background);
      background-color: #000;
      opacity: 0.5;

      top: 0;
      left: 0;
    }
  }

  @media (min-width: 800px) {
    grid-column: 1;

    align-self: center;
    justify-self: start;
    text-align: left;


    &::before {
      background-color: transparent;
    }
  }
`;

function Home() {
  return (
    <StyledHome>
      <Navbar />
      <StyledMain>
        <Contents>
          <Illustration>
            <img src="3d-5.png" alt="world map" />
          </Illustration>
          <Description>
            <Heading>MapMate</Heading>
            <p>
              Navigate your business with ease: pin customer locations, add
              information, and calculate distances hassle-free.
            </p>

            <Cta href="/app" content="Get Started Now" />
          </Description>
        </Contents>
      </StyledMain>
    </StyledHome>
  );
}

export default Home;
