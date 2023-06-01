import React from 'react';
import Map from './Map'; // Replace './Map' with the correct path to your Map component

const Home = () => {
  return (
    <div className="container">
      <div className="map-container">
        <h1>Kiev Map</h1>
        <div className="map-wrapper">
          <Map />
        </div>
      </div>

      <div className="legend">
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: 'red', opacity: 0.1 }}></div>
          <div className="legend-label">Low Bombings</div>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: 'red', opacity: 0.3 }}></div>
          <div className="legend-label">Medium Bombings</div>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: 'red', opacity: 0.5 }}></div>
          <div className="legend-label">High Bombings</div>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: 'red', opacity: 0.7 }}></div>
          <div className="legend-label">Very High Bombings</div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
