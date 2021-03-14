import React from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import './index.scss';

import { useTypeSelector } from '../../hooks/useTypeSelector';

const Map: React.FC = () => {
  const [l, g] = useTypeSelector((state) => state.geolocation.userGeo);
  const [location, setLocation] = React.useState<LatLngExpression>([l, g]);
  
  React.useEffect(() => {
    setLocation([l, g]);
  }, [l, g]);

  function MyMap() {
    const map = useMap();
    map.panTo(location);
    return null;
  }

  return (
    <MapContainer center={location} zoom={9} scrollWheelZoom={false} className="mapContainer">
      <MyMap />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default Map;
