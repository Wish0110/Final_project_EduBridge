import React, { useState } from 'react';
import { GoogleMapsAPI } from '@vis.gl/react-google-maps';

interface APIProviderProps {
  apiKey: string;
  children: React.ReactNode;
}

const APIProvider: React.FC<APIProviderProps> = ({ apiKey, children }) => {
  const [mapInstances, setMapInstances] = useState(new Map());

  const useMapInstances = () => {
    return [mapInstances, setMapInstances];
  };

  return (
    <GoogleMapsAPI apiKey={apiKey}>
      <MapContext.Provider value={{ useMapInstances }}>
        {children}
      </MapContext.Provider>
    </GoogleMapsAPI>
  );
};

export default APIProvider;