import React from 'react';
import { Geographies, Geography } from 'react-simple-maps';

const geoUrl =
"https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const MapChart = () => {
  return (
    <Geographies geographyUrl={geoUrl}>
      {({ geographies }) =>
        geographies.map(geo => (
          <Geography
            key={geo.rsmKey}
            geography={geo}
            fill="#EAEAE7"
            stroke="#D6D6DA"
          />
        ))
      }
    </Geographies>
  );
};

export default MapChart;