/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import LocationMarker from "./leaftLet/LocationMarker";
// import styled from "styled-components";

function LeafletMap({isFormOpen}) {


  useEffect(() => {

  }, []);

  return (
    <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
  
        className="leaflet-map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      <LocationMarker isFormOpen={ isFormOpen} />
      </MapContainer>
  );
}

export default LeafletMap;
