import React from 'react';
import { Map } from '@vis.gl/react-google-maps';

export default function Intro() {
  const position = { lat: 5354, lng: 10 };

  return (
    <div style={{ height: '100vh' }}>
      <Map zoom={9} center={position}></Map>
    </div>
  );
}