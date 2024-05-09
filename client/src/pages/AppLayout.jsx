/* eslint-disable react/prop-types */
import styled from "styled-components";
import GoogleMaps from "../components/GoogleMaps";
import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import { useCustomers } from "../features/useCustomers";
import PulsatingCircle from "../components/PulsatingCircleButton";

const StyledApp = styled.section`
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  grid-template-rows: 100vh;
  padding: 0.5em;
  position: relative;

@media (min-width: 56.25em){
    grid-template-columns: 20em 1fr;
    grid-template-rows: auto;
  /* grid-template-rows: 100dvh; */

    gap: 0.5em;
    padding: 1em;
  }
  /* @media (min-width: 75em){
    grid-template-columns: 320px 1fr;
  } */
  `;

const MapContainer = styled.section`

  grid-column: 1/-1;
  grid-row: 1;

  border-radius: 0.8em;
  @media (min-width: 56.25em){
    grid-column: 2;
    grid-row: 1;
  }
`;

function AppLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [customerDetails, setCustomerDetails] = useState([]);
  const { customers } = useCustomers();

  function handleClick() {
    setIsOpen(!isOpen);
  }

  useEffect(() => { 
    if (customers) {

      const customerOBJ = customers?.reduce((arr, curr) => {
        return [...arr, {name: curr.name, position: curr.position}]
      }, [])

      setCustomerDetails(customerOBJ);
    }
  },[customers])

  return (
    <StyledApp>
      <Sidebar  isOpen={ isOpen}/>

      <PulsatingCircle className={isOpen ? "isOpen" : ""} isOpen={ isOpen} onHandleClick={handleClick} />

      <MapContainer>
        <GoogleMaps customerDetails={ customerDetails } />
      </MapContainer>
    </StyledApp>
  );
}

export default AppLayout;
