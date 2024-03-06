import React from 'react';
//import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Include CSS for styling
import { MapContainer, TileLayer, Marker, ZoomControl } from 'react-leaflet';
import { Popup } from 'react-leaflet';

const MapChart = () => {
  // Initial map center and zoom level
  const mapCenter = [52.3555, -1.1572]; // Center of UK
  const zoomLevel = 6;

  // Coordinates of Plymouth University
  const plymouthUniversityCoordinates = [50.4122, -4.0882];

  return (
    <MapContainer center={mapCenter} zoom={zoomLevel} style={{ height: '400px' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={plymouthUniversityCoordinates}>
        <Popup>
          Plymouth University
        </Popup>
      </Marker>
      <ZoomControl position="bottomright" />
    </MapContainer>
  );
};

export default MapChart;