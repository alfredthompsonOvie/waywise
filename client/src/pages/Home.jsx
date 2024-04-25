import Cta from "../components/Cta";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const StyledHome = styled.section`
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  grid-template-rows: 5em calc(100vh - 5em);

  min-height: 100vh;
  background-image: url("home.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
const StyledMain = styled.main`
  grid-column: 2;
  grid-row: 2;
  display: grid;
  place-content: center;
  grid-gap: 1em;
  position: relative;

`;

const Contents = styled.section`
  padding: 1em;
  max-width: 25em;
  width: 100%;
  text-align: center;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--background);
    opacity: .5;
    top: 0;
    left: 0;
  }
  
  p {
    position: relative;
    margin-bottom: 2em;
  }

`;

function Home() {
  return (
    <StyledHome>
      <Navbar />
      <StyledMain>
        <Contents>
          <p>Navigate your business with ease: pin customer locations, add information, and calculate distances hassle-free.</p>

          <Cta href="/app" content="Get Started Now" />
        </Contents>
      </StyledMain>
    </StyledHome>
  );
}

export default Home;
