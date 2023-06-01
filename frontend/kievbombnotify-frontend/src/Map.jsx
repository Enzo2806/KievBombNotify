import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'

// Import GeoJSON files
import dnipro from './GeoJSON Files/Dnipro.json'
import darnytsia from './GeoJSON Files/Darnytsia.json'
import obolon from './GeoJSON Files/Obolon.json'
import podil from './GeoJSON Files/Podil.json'
import syvatoshyn from './GeoJSON Files/Syvatoshyn.json'
import desna from './GeoJSON Files/Desna.json'
import shevchenko from './GeoJSON Files/Shevchenko.json'
import solomyansk from './GeoJSON Files/Solom\'yansk.json'
import pechersk from './GeoJSON Files/Pechersk.json'
import holosiiv from './GeoJSON Files/Holosiiv.json'

const Map = () => {
  const initialPosition = [50.450001, 30.523333]; // Kiev coordinates
  const initialZoom = 9;

  const districtDefaultStyle = {
    fillColor: 'white', // Set the default fill color for districts
    weight: 1,
    color: 'black',
    fillOpacity: 0.1,
  };
  const cityStyle = {
    fillColor: 'white', // Set the default fill color for city
    weight: 1,
    color: 'white',
    fillOpacity: 0.1,
  };

  const onEachDistrict = (feature, layer) => {
    // Bind a popup with district information to each district layer
    if (feature.properties && feature.properties.name) {
      layer.bindPopup(feature.properties.name);
    }
  };

  return (
    <MapContainer center={initialPosition} zoom={initialZoom} style={{ height: '100%', width: '100%' }}>
      <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png" />
        <GeoJSON data={obolon} style={districtDefaultStyle} onEachFeature={onEachDistrict} />
        <GeoJSON data={dnipro} style={districtDefaultStyle} onEachFeature={onEachDistrict} />
        <GeoJSON data={darnytsia} style={districtDefaultStyle} onEachFeature={onEachDistrict} />
        <GeoJSON data={podil} style={districtDefaultStyle} onEachFeature={onEachDistrict} />
        <GeoJSON data={syvatoshyn} style={districtDefaultStyle} onEachFeature={onEachDistrict} />
        <GeoJSON data={desna} style={districtDefaultStyle} onEachFeature={onEachDistrict} />
        <GeoJSON data={shevchenko} style={districtDefaultStyle} onEachFeature={onEachDistrict} />
        <GeoJSON data={solomyansk} style={districtDefaultStyle} onEachFeature={onEachDistrict} />
        <GeoJSON data={pechersk} style={districtDefaultStyle} onEachFeature={onEachDistrict} />
        <GeoJSON data={holosiiv} style={districtDefaultStyle} onEachFeature={onEachDistrict} />
    </MapContainer>
  );
};

export default Map;