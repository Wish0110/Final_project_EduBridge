import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, ZoomControl, Popup } from 'react-leaflet';

const MapContainerComponent = ({ center, zoom, children }) => {
  return (
    <MapContainer center={center} zoom={zoom} style={{ height: '400px' }}>
      {children}
      <ZoomControl position="bottomright" />
    </MapContainer>
  );
};

const MapChart = () => {
  // Initial map center and zoom level
  const mapCenter = [52.3555, -1.1572]; // Center of UK
  const zoomLevel = 6;

  // Coordinates of Plymouth University
  const plymouthUniversityCoordinates = [50.4122, -4.0882];

  const [showDetails, setShowDetails] = useState(false); // State to toggle details

  const handleDetailsClick = () => {
    setShowDetails(!showDetails); // Toggle state on button click
  };

  return (
    <MapContainerComponent center={mapCenter} zoom={zoomLevel}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={plymouthUniversityCoordinates}>
        <Popup>
          {showDetails ? (
            <div>
              {/* Detailed information about Plymouth University */}
              <p>Plymouth University is a public university in Plymouth, England.</p>
              <a href="https://www.plymouth.ac.uk/" target="_blank" rel="noreferrer">
                Explore Plymouth University
              </a>
            </div>
          ) : (
            <button onClick={handleDetailsClick}>More Info</button>
          )}
        </Popup>
      </Marker>
    </MapContainerComponent>
  );
};

export default MapChart;