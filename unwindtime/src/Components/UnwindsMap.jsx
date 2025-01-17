import React from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api'; //eslint-disable-line

import Unwind from './Unwind';

const containerStyle = {
  width: '100%',
  height: '100%',
};

function UnwindsMap({ location, unwinds }) {
  // console.log(unwinds);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCez882QWlP85wQRNooAi0llw1ymzL96zI',
  });

  const [map, setMap] = React.useState(null); //eslint-disable-line
  //
  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds(location);
  //   map.fitBounds(bounds);
  //   setMap(map);
  // }, []); //eslint-disable-line

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null);
  // }, []);

  return isLoaded && location ? (
    <GoogleMap mapContainerStyle={containerStyle} id="41684020cb892eae" center={location} zoom={14}>
      {unwinds && (
        <div>
          {unwinds.map((unwind) => (
            <InfoWindow position={location} key={unwind.id}>
              <Unwind key={unwind.id} unwind={unwind.data()} unwindID={unwind.id} location={location}></Unwind>
            </InfoWindow>
          ))}
        </div>
      )}
    </GoogleMap>
  ) : (
    <h1>Loading</h1>
  );
}

export default React.memo(UnwindsMap);
