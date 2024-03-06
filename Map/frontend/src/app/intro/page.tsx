"use client";
import {useState} from 'react';
import { 
    APIProvider,
    Map 
} from '@vis.gl/react-google-maps';

export default function Intro() {
  const position = { lat: 53.54, lng: 10 };

  return (
  <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
    <div>
    <div style={{ height: '100vh' }}>
      <Map zoom={9} center={position}></Map>
    </div>
    </div>
    </APIProvider>
    );
}