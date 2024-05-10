/* eslint-disable react/prop-types */

import {
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef
} from '@vis.gl/react-google-maps';
import { useState } from 'react';
// import { useCallback, useState } from 'react';

function MarkerWithInfoWindow({customer}) {

  const [markerRef, marker] = useAdvancedMarkerRef();

  const [infoWindowShown, setInfoWindowShown] = useState(false);

  // const handleMarkerClick = useCallback(() =>
  //   setInfoWindowShown(isShown => !isShown)
  // );
  const handleMarkerClick = () => setInfoWindowShown(isShown => !isShown)

  const handleClose = () => setInfoWindowShown(false);

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        position={customer.position}
        onClick={handleMarkerClick}
      />

      {infoWindowShown && (
        <InfoWindow anchor={marker} onClose={handleClose}>
          <h2>InfoWindow content!</h2>
          <p>Some arbitrary html to be rendered into the InfoWindow.</p>
          <p>{customer.name }</p>
        </InfoWindow>
      )}
    </>
  );
}

export default MarkerWithInfoWindow;