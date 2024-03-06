import React from 'react';
import { APIProvider } from './components/APIProvider';
import Intro from './mappage'; // Adjust the path if necessary

const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

function App() {
  return (
    <div>
      <APIProvider apiKey={googleMapsApiKey}>
        <Intro />
      </APIProvider>
    </div>
  );
}

export default App;