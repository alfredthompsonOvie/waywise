import { Outlet } from "react-router-dom"
import styled from "styled-components"

const StyledAside = styled.aside`

  grid-row: 2;
  grid-column: 2;
  border-radius: 0.8em;
  padding: 1em;

  @media (min-width: 56.25em){
    grid-column: 1;
    grid-row: 1;
    background-color: var(--secondary);
  }
`

function Sidebar() {
  return (
    <StyledAside >
      <section>
        <Outlet />
      </section>
    </StyledAside>
  )
}

export default Sidebar
