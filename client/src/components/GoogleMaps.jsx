/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MapContainer = styled.section`
  width: 100%;
  height: 100%;
  border-radius: 0.8em;

  @media (min-width: 56.25em) {
    grid-column: 2;
    grid-row: 1;
  }
`;

function GoogleMaps({ customerDetails }) {
  const navigate = useNavigate();

  const mapRef = useRef(null);

  useEffect(() => {
    async function initializeMap() {
      const loader = new Loader({
        apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");
      const { AdvancedMarkerElement } = await loader.importLibrary("marker");

      // const google = await loader.load(); // Load Google Maps API

      // const geocoder = new google.maps.Geocoder();

      const LocationInMap = {
        lat: -3.745,
        lng: -38.523,
      };
      const mapOptions = {
        center: LocationInMap,
        zoom: 4,
        mapId: "Customer Location Pinning System",
      };

      const map = new Map(mapRef.current, mapOptions);

        customerDetails.map((customer) => ({
        ...customer,
        position: {
          lat: parseInt(customer.position.lat),
          lng: parseInt(customer.position.lng),
        },
        }))
          .map((customer) => {
        const marker = new AdvancedMarkerElement({
          position: customer.position,
          map: map,
        });
      });

      map.addListener("click", (e) => {
        const lat = e.latLng.lat();
        const lng = e.latLng.lng();

        navigate(`form?lat=${lat}&lng=${lng}`)

        // placeMarkerAndPanTo(e.latLng, map, loader);
        // reverseGeocode(geocoder, {lat, lng})
      });
    }

    // const reverseGeocode = (geocoder, location) => {
    //   // geocoder = new geocoder.Geocoder();

    //   geocoder.geocode({ location }, (results, status) => {
    //     if (status === 'OK') {
    //       if (results[0]) {
    //         const address = results[0].formatted_address;
    //         console.log('Address:', address);
    //         // Handle the address here
    //       } else {
    //         console.error('No results found');
    //       }
    //     } else {
    //       console.error('Geocoder failed due to: ' + status);
    //     }
    //   });
    // };

    // function placeMarkerAndPanTo(latLng, map, loader) {
    //   const { AdvancedMarkerElement } = await loader.importLibrary("marker");

    //   new google.maps.marker.AdvancedMarkerElement({
    //     position: latLng,
    //     map: map,
    //   });
    //   map.panTo(latLng);
    // }

    initializeMap();
  }, [customerDetails, navigate]);

  return (
    <MapContainer ref={mapRef}>
      Google maps
    </MapContainer>
  );
}

export default GoogleMaps;
