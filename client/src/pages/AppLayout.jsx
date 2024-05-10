/* eslint-disable react/prop-types */
import styled from "styled-components";
// import GoogleMaps from "../components/GoogleMaps";
// import GoogleMap from "../components/GoogleMap";
import toast from "react-hot-toast";

import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import { useCustomers } from "../features/useCustomers";
import PulsatingCircle from "../components/PulsatingCircleButton";
import LeafletMap from "../components/LeafletMap";
import { useLocation, useNavigate } from "react-router-dom";

const StyledApp = styled.section`
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  grid-template-rows: auto;
  padding: 0.5em;
  position: relative;

  @media (min-width: 56.25em) {
    grid-template-columns: 20em 1fr;
    grid-template-rows: auto;
    /* grid-template-rows: 100dvh; */

    gap: 0.5em;
    padding: 1em;
  }
`;

const MapContainer = styled.section`
  grid-column: 1/-1;
  grid-row: 1;

  border-radius: 0.8em;
  @media (min-width: 56.25em) {
    grid-column: 2;
    grid-row: 1;
  }
`;

// const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

function AppLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  // console.log("Location", location);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [customerDetails, setCustomerDetails] = useState([]);
  const { customers } = useCustomers();

  function handleClick() {
    if (location.pathname === "/app/form") {
      setIsFormOpen(true)
    } else {
      navigate("/app/customers");
      setIsFormOpen(false);

    }
    // setIsFormOpen((isFormOpen) => !isFormOpen);
  }
  function toggleSidebar() { 
    setIsFormOpen((isFormOpen) =>!isFormOpen);
  }

  useEffect(() => {
    toast("Click on the map to get started...");

    if (customers) {
      const customerOBJ = customers?.reduce((arr, curr) => {
        return [
          ...arr,
          {
            name: curr.name,
            position: {
              lat: parseInt(curr.position.lat),
              lng: parseInt(curr.position.lng),
            },
            id: curr._id,
          },
        ];
      }, []);

      setCustomerDetails(customerOBJ);
    }
  }, [customers]);

  return (
    <StyledApp>
      <Sidebar isFormOpen={isFormOpen} />

      <PulsatingCircle
        className={isFormOpen ? "isFormOpen" : ""}
        isFormOpen={isFormOpen}
        onHandleClick={toggleSidebar}
      />

      {/* <MapContainer > */}
      <MapContainer onClick={handleClick}>
        <LeafletMap isFormOpen={isFormOpen} customerDetails={customerDetails} />
      </MapContainer>
    </StyledApp>
  );
}

export default AppLayout;
