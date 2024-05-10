/* eslint-disable react/prop-types */
import {
  APIProvider,
  Map,
} from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";

import MarkerWithInfoWindow from "./MarkerWithInfoWindow";

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
function GoogleMap({ customerDetails }) {
  // console.log(customerDetails);
  // console.log(customerDetails[0].position);
  const [center, setCenter] = useState({ lat: 22.54992, lng: 0 });
  // console.log(center);

  useEffect(() => {
    // if (customerDetails) {
    //   setCenter(customerDetails[0]?.position);
    // } else {
    //   setCenter({ lat: 22.54992, lng: 0 });
    // }

    customerDetails
      ? setCenter(customerDetails[0]?.position)
      : setCenter({ lat: 22.54992, lng: 0 });
    
  }, [customerDetails]);
  return (
    <APIProvider apiKey={API_KEY}>
      <Map
        // style={{width: '100vw', height: '100vh'}}
        center={center}
        zoom={3}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      >
        {customerDetails && customerDetails.map((el) => (
          <MarkerWithInfoWindow customer={el} key={el.id} />
        ))}
      </Map>
    </APIProvider>
  );
}

export default GoogleMap;
