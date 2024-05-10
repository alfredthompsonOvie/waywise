/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { Loader, LoaderStatus } from "@googlemaps/js-api-loader";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import toast from 'react-hot-toast';

const MapContainer = styled.section`
  width: 100%;
  height: 100%;
  border-radius: 0.8em;

  @media (min-width: 56.25em) {
    grid-column: 2;
    grid-row: 1;
  }
`;

function GoogleMaps({ customerDetails, onHandleForm }) {
  const navigate = useNavigate();

  const mapRef = useRef(null);

  useEffect(() => {
    async function initializeMap() {
      const loader = new Loader({
        apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
        version: "weekly",
        libraries: ["marker"]
      });

      const { Map } = await loader.importLibrary("maps");
        const { AdvancedMarkerElement } = await loader.importLibrary("marker");
        const { poly } = await loader.importLibrary("geometry");
        // const { AdvancedMarkerElement } = await loader.importLibrary("marker");
  
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

          const clickedLatLng = e.latLng;

          const isOverLand = poly.containsLocation(clickedLatLng);

          console.log("isOverLand", isOverLand)

          // Check if clicked point is over land
        // const isOverLand = window.google.maps.geometry.poly.containsLocation(
        //   clickedLatLng,
        //   landPolygon // Replace landPolygon with your land polygon data
        // );

        // // Output the result
        // if (isOverLand) {
        //   console.log('Clicked on land.');
        // } else {
        //   console.log('Clicked on sea.');
        // }
  
          navigate(`form?lat=${lat}&lng=${lng}`);
          onHandleForm(true);
  
          placeMarkerAndPanTo(e.latLng, map, loader);
          // reverseGeocode(geocoder, {lat, lng})
        });

      // if (loader.status === LoaderStatus.SUCCESS) {
        
      // } else if (loader.status === LoaderStatus.FAILURE) { 
      //   toast("Error")
      // }

      // console.log("loader status is",loader.status)
      // console.log("loaderStatus is", LoaderStatus)
      // console.log("loaderStatus is", loader.status === LoaderStatus.SUCCESS)


    }

    async function placeMarkerAndPanTo(latLng, map, loader) {

      const { AdvancedMarkerElement } = await loader.importLibrary("marker");

      // new loader.marker.AdvancedMarkerElement({
      //   position: latLng,
      //   map: map,
      // });

      new AdvancedMarkerElement({

      })

      map.panTo(latLng);
      // new google.maps.marker.AdvancedMarkerElement({
      //   position: latLng,
      //   map: map,
      // });
      // map.panTo(latLng);
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



    initializeMap();
  }, [customerDetails, navigate]);

  return (
    <MapContainer ref={mapRef}>
      Google maps
    </MapContainer>
  );
}

export default GoogleMaps;
