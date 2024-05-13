/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import LocationMarker from "./leaftLet/LocationMarker";
// import styled from "styled-components";

function LeafletMap({ isFormOpen, userCords, customerDetails }) {
  const mapRef = useRef(null);

  useEffect(() => {
    // console.log("customerDetails", customerDetails);
    if (userCords.lat) {
      const { lat, lng } = userCords;
      mapRef.current.setView([lat, lng], 13);
    }
  }, [userCords, customerDetails]);

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={1}
      // scrollWheelZoom={false}
      className="leaflet-map"
      ref={mapRef}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker isFormOpen={isFormOpen} userCords={userCords} />

      {userCords.lat && (
        <Marker position={[userCords.lat, userCords.lng]}>
          <Popup>You</Popup>
        </Marker>
      )}

      {
        customerDetails.map(el => <Marker position={[el.position.lat, el.position.lng]} key={el.id}>
          <Popup>{el.name}</Popup>
        </Marker>)
      }
    </MapContainer>
  );
}

export default LeafletMap;
