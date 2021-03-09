import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './index.scss';

import { useActions } from '../../hooks/useAction';
import { useTypeSelector } from '../../hooks/useTypeSelector';

const Map: React.FC = () => {
  const [l, g] = useTypeSelector((state) => state.geolocation.userGeo);
  const { setGeolocation } = useActions();
  React.useEffect(() => {
    setGeolocation();
  }, []);

  return (
    <MapContainer center={[l, g]} zoom={13} scrollWheelZoom={false} className="mapContainer">
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[l, g]}>
        <Popup>You are here</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
