import styled from "styled-components"

const StyledSettings = styled.section`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  grid-template-rows: auto;

  place-items: center;

  section {
    grid-column: 2;

    h1 {
      font-size: 2.5rem;
    }
  }
`;




function Settings() {
  return (
    <StyledSettings>
      <section>
      <h1>Settings</h1>
      <p>Page not ready yet!!!</p>

      </section>
    </StyledSettings>
  )
}

export default Settings
