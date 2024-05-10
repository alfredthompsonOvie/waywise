/* eslint-disable react/prop-types */
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

import Profile from "./Profile";
import Brand from "./Brand";
import Button from "./Button";

import { FaCog } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { useAuth } from "../contexts/AuthContext";

// import ButtonMenu from "./ButtonMenu";
// import { useState } from "react";
// import PulsatingCircle from "./PulsatingCircle";

const StyledAside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 0.8em;
  padding: 1em;

  position: absolute;
  top: 0;
  left: -100%;
  /* left: 0%; */
  bottom: 0;



  max-width: 20em;
  width: 100%;
  /* height: 100%; */
  background-color: var(--background-card);
  /* background-color: var(--secondary); */
  z-index: 100;
  
  
  &.isOpen {
    left: 0%;
  }

  @media (min-width: 56.25em) {
    grid-column: 1;
    grid-row: 1;
    min-height: 100vh;
    height: 100%;
    /* background-color: var(--secondary); */

      /* grid-row: 1;
  grid-column: 2; */
  border-radius: 0.8em;

    position: static;
  }
`;

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
        <Button $mode="secondary">
          {" "}
          <FaCog /> <span>Settings</span>
        </Button>

        <Button onClick={handleClick}>
          {" "}
          <CiLogout /> <span>Logout</span>
        </Button>

        {/* <p>© 2024 MapMate</p> */}
      </Footer>
    </StyledAside>
  );
}

export default Sidebar;
