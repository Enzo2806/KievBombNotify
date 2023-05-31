import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import districtsData from './districtData.json'; // Import the districtsData file
import 'leaflet/dist/leaflet.css'

const Map = () => {
  const initialPosition = [50.450001, 30.523333]; // Kiev coordinates
  const initialZoom = 13;

  const geoJSONStyle = {
    fillColor: 'green', // Set the default fill color for districts
    weight: 1,
    color: 'white',
    fillOpacity: 0.7,
  };

  const onEachDistrict = (feature, layer) => {
    // Bind a popup with district information to each district layer
    if (feature.properties && feature.properties.name) {
      layer.bindPopup(feature.properties.name);
    }
  };

  return (
    <MapContainer center={initialPosition} zoom={initialZoom} style={{ height: '100%', width: '100%' }}>
      <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />
      <GeoJSON data={districtsData} style={geoJSONStyle} onEachFeature={onEachDistrict} />
    </MapContainer>
  );
};

export default Map;