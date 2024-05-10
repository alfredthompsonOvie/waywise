/* eslint-disable react/prop-types */

import { useMapEvent } from "react-leaflet"
import { useNavigate } from "react-router-dom";

function LocationMarker({isFormOpen}) {
  const navigate = useNavigate();

  const map = useMapEvent('click', (e) => {
    // map.setView([50.5, 30.5], map.getZoom())

    const { lat, lng } = e.latlng
    console.log("lat and lng:", lat, lng);
    // console.log(isFormOpen);
    navigate(`form?lat=${lat}&lng=${lng}`);
    // isFormOpen ? navigate(`form?lat=${lat}&lng=${lng}`) : navigate("/app/");
  })


  return null;
}

export default LocationMarker;