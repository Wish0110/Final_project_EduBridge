import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'leaflet/dist/leaflet.css'; // Include CSS for styling
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import L from 'leaflet';

const universities = [
  {
    name: 'University of Oxford',
    coordinates: [51.7520, -1.2577],
    
  },
  {
    name: 'University of Cambridge',
    coordinates: [52.2053, 0.1218],
  },
  {
    name: 'Imperial College London',
    coordinates: [51.4993, -0.1793],
  },
  {
    name: 'UCL',
    coordinates: [51.5240, -0.1340],
  },
  {
    name: 'University of Edinburgh',
    coordinates: [55.9440, -3.1860],
  },
  {
    name: 'Dublin University',
    coordinates: [53.3324, -6.2487],
  },
  {
    name: 'Abertay University (Dundee)',
    coordinates: [56.4620, -2.9750],
  },
  {
    name: 'Aberystwyth University (Aberystwyth)',
    coordinates: [52.4170, -4.0610],
  },
  {
    name: 'Anglia Ruskin University (Cambridge)',
    coordinates: [52.2050, 0.1210],
  },
  {
    name: 'Arts University Bournemouth (Poole)',
    coordinates: [50.7270, -1.9900],
  },
  {
    name: 'Plymouth University',
    coordinates: [50.4122, -4.0882],
  },
  {
    name: 'University of Aberdeen',
    coordinates: [57.1497, -2.0943],
  },
  {
    name: 'Abertay University',
    coordinates: [56.4620, -2.9750],
  },
  {
    name: 'Aberystwyth University',
    coordinates: [52.4170, -4.0610],
  },
  {
    name: 'Anglia Ruskin University',
    coordinates: [52.2050, 0.1210],
  },
  {
    name: 'University of Arts London',
    coordinates: [51.5194, -0.1269],
  },
  {
    name: 'University of Bath',
    coordinates: [51.3789, -2.3904],
  },
  {
    name: 'University of Birmingham',
    coordinates: [52.4833, -1.9038],
  },
  {
    name: 'University of Bolton',
    coordinates: [53.5892, -2.4438],
  },
  {
    name: 'Bournemouth University',
    coordinates: [50.7270, -1.9900],
  },
  {
    name: 'University of Bradford',
    coordinates: [53.7963, -1.7530],
  },
  {
    name: 'University of Brighton',
    coordinates: [50.8242, -0.1378],
  },
  {
    name: 'University of Bristol',
    coordinates: [51.4545, -2.5979],
  },
  {
    name: 'Brunel University London',
    coordinates: [51.5194, -0.4353],
  },
  {
    name: 'University of Cambridge',
    coordinates: [52.2053, 0.1218],
  },
  {
    name: 'Canterbury Christ Church University',
    coordinates: [51.2792, 1.0840],
  },
  {
    name: 'Cardiff Metropolitan University',
    coordinates: [51.4816, -3.1761],
  },
  {
    name: 'Cardiff University',
    coordinates: [51.4816, -3.1761],
  },
  {
    name: 'University of Central Lancashire',
    coordinates: [53.7939, -2.4500],
  },
  {
    name: 'University of Chester',
    coordinates: [53.1931, -2.8804],
  },
  {
    name: 'Coventry University',
    coordinates: [52.4074, -1.5121],
  },
  {
    name: 'University of Cumbria',
    coordinates: [54.6667, -2.9333],
  },
  {
    name: 'De Montfort University',
    coordinates: [52.6304, -1.1396],
  },
  {
    name: 'University of Derby',
    coordinates: [52.9208, -1.4769],
  },
  {
    name: 'Durham University',
    coordinates: [54.7754, -1.5782],
  },
  {
    name: 'University of East Anglia',
    coordinates: [52.6110, 1.2856],
  },
];

const customIcon = L.icon({
  iconUrl: require('./marker.png'), // Replace with your image path
  iconSize: [32, 32], // Adjust size as needed
  iconAnchor: [16, 32], // Center the icon at the marker's position
});

const MapChart = () => {
  // Initial map center and zoom level
  const mapCenter = [52.3555, -1.1572]; // Center of UK
  const zoomLevel = 6;

  const [showDetails, setShowDetails] = useState(false); // State to toggle details

  const handleDetailsClick = (university) => {
    setShowDetails(!showDetails); // Toggle state on button click
  };


  return (
    
    <MapContainer center={mapCenter} zoom={zoomLevel} style={{ height: '400px' }}>
      
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {universities.map((university) => (
        <Marker key={university.name} position={university.coordinates} icon={customIcon}>
          <Popup>
            {showDetails ? (
              <div>
                {/* Detailed information about the university */}
                <p>{university.name}</p>
                {university.name === 'Plymouth University' && (
                  <Link to="/PlymouthUnivesity">
                    <button>Explore Plymouth University</button>
                </Link>
                )}
              </div>
            ) : (
              <button onClick={() => handleDetailsClick(university)}>More Info</button>
            )}
            
          </Popup>
        </Marker>
      ))}
      <ZoomControl position="bottomright" />
    </MapContainer>
  );
};

export default MapChart;