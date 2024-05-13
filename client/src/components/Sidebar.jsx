/* eslint-disable react/prop-types */
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

import Profile from "./Profile";
import Brand from "./Brand";

import { FaCog } from "react-icons/fa";
import { useAuth } from "../contexts/AuthContext";
import Cta from "./Cta";
import LogoutButton from "./LogoutButton";

// import ButtonMenu from "./ButtonMenu";
// import { useState } from "react";
// import PulsatingCircle from "./PulsatingCircle";

const StyledAside = styled.aside`
  max-width: 20em;
  width: 100%;

  position: absolute;
  top: 0;
  left: -100%;
  bottom: 0;

  display: flex;
  flex-direction: column;
  gap: 0.8em;
  padding: 1em;

  background-color: var(--background-card);
  z-index: 100;
    
  &.isOpen {
    left: 0%;
  }

  @media (min-width: 56.25em) {
    position: static;
    grid-column: 1;
    grid-row: 1;
    min-height: 100vh;
    height: 100%;

  border-radius: 0.8em;

  }
`;

const Content = styled.section`
  
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  /* position: relative; */
`;
const Contents = styled.section`
  flex: 2;
  background-color: var(--background);
  /* background-color: #242f49; */
  /* background-color: var(--secondary); */
  border-radius: 0.4em;
  /* min-height: 10em; */
  padding: 0.5em;
  height: 50em;
  margin-bottom: 1em;
`;
const Footer = styled.footer`
  /* display: flex; */
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
`;


function Sidebar({ isFormOpen }) {
  const navigate = useNavigate()


  const {logout } = useAuth()
  
  function handleClick() {

    logout();
    navigate("/");
  }

  return (
    <StyledAside className={isFormOpen ? "isOpen" : ""}>
      <Header>
        <Brand />

      </Header>

      <Profile />

      <Contents>
        <Outlet />
      </Contents>

      <Footer>
        <Cta mode="settings" href="/settings">
          {" "}
          <FaCog /> <span>Settings</span>
        </Cta>

        <LogoutButton />

        {/* <p>© 2024 MapMate</p> */}
      </Footer>
    </StyledAside>
  );
}

export default Sidebar;
