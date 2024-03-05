import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  height: '400px',
  width: '800px'
};

const center = {
  lat: 55.3781,
  lng: -3.4359
};

const locations = [
  { name: 'Location 1', position: { lat: 55.3781, lng: -3.4359 }, url: 'https://www.location1.com' },
  { name: 'Location 2', position: { lat: 55.8642, lng: -4.2518 }, url: 'https://www.location2.com' },
  { name: 'Location 3', position: { lat: 54.9864, lng: -1.6016 }, url: 'https://www.location3.com' }
];

const MapWithMarkers = () => {
  const mapRef = React.useRef(null);

  const onClick = React.useCallback((event) => {
    const clickedLat = event.latLng.lat();
    const clickedLng = event.latLng.lng();

    locations.forEach((location) => {
      if (location.position.lat === clickedLat && location.position.lng === clickedLng) {
        window.open(location.url, '_blank');
      }
    });
  }, []);

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyC46MiwQwexfmlNXfQYyd4Uy7FGzU6zZYM"
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={6}
        onClick={onClick}
      >
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={location.position}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapWithMarkers;

