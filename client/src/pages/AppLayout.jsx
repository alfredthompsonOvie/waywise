/* eslint-disable react/prop-types */
import styled from "styled-components";
import GoogleMaps from "../components/GoogleMaps";
import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";
import { useEffect, useState } from "react";
import { useCustomers } from "../features/useCustomers";

const StyledApp = styled.section`
  position: relative;
  min-height: 100vh;

  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: 1fr 10fr 1fr;
  gap: 1em;
  padding: 0.5em;

  @media (min-width: 56.25em){
    grid-template-columns: 4fr 8fr;
    grid-template-rows: auto;
    padding: 1em;
  }
  @media (min-width: 75em){
    grid-template-columns: 320px 1fr;
  }
`;

const MapContainer = styled.section`
  min-height: 50vh;
  height: 100%;
  width: 100%;
  grid-column: 1/-1;
  grid-row: 1;
  border-radius: 0.8em;
  @media (min-width: 56.25em){
    grid-column: 2;
    grid-row: 1;
  }
`;

function AppLayout() {
  const [customerDetails, setCustomerDetails] = useState([]);

  const { customers } = useCustomers();

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
      <Sidebar />

      <MapContainer>
        <Profile/>
        <GoogleMaps customerDetails={ customerDetails } />
      </MapContainer>
    </StyledApp>
  );
}

export default AppLayout;
