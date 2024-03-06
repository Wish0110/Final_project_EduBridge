import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Include CSS for styling
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';

const MapChart = () => {
  // Initial map center and zoom level
  const mapCenter = [52.3555, -1.1572]; // Center of UK
  const zoomLevel = 6;

  return (
      <MapContainer center={mapCenter} zoom={zoomLevel} style={{ height: '400px' }}>
          <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <ZoomControl position="bottomright" />
      </MapContainer>
  );
};

export default MapChart;
