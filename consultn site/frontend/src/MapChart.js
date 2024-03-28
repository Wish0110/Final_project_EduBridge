import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, ZoomControl, Popup } from 'react-leaflet';

const plymouthUniversityCoordinates = [50.4122, -4.0882];

const MapContainerComponent = ({ center, zoom }) => {
  const [showDetails, setShowDetails] = useState(false); // State for popup details

  const handleDetailsClick = () => {
    setShowDetails(!showDetails); // Toggle state on button click
  };

  return (
    <MapContainer center={center} zoom={zoom} style={{ height: '400px' }}>
      <ZoomControl position="bottomright" />
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
      {/* Add other children components here */}
    </MapContainer>
  );
};

const MapChart = () => {
  // Initial map center and zoom level
  const mapCenter = [52.3555, -1.1572]; // Center of UK
  const zoomLevel = 6;

  // Coordinates of Plymouth University
  //const plymouthUniversityCoordinates = [50.4122, -4.0882];

  // No need for showDetails and handleDetailsClick here

  return (
    <MapContainerComponent center={mapCenter} zoom={zoomLevel} />
  );
};

export default MapChart;
