import React from 'react';
import Map from './Map'; // Replace './Map' with the correct path to your Map component

const Home = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div style={{ width: '600px', height: '400px' }}>
        <h1>Kiev Map</h1>
        <div className="map-container" style={{ height: '100%', width: '100%' }}>
          <Map />
        </div>
        {/* Other content */}
      </div>
    </div>
  );
};

export default Home;
