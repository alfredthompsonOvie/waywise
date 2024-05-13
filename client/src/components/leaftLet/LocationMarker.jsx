/* eslint-disable react/prop-types */

import { useMapEvent } from "react-leaflet"
import { useNavigate } from "react-router-dom";

function LocationMarker({isFormOpen, userCords}) {
  const navigate = useNavigate();

  const map = useMapEvent('click', (e) => {
    const { lat, lng } = e.latlng

    navigate(`form?lat=${lat}&lng=${lng}`);
  })


  return null;
}

export default LocationMarker;