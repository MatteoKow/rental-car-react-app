import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {Icon} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';

import PinIcon from '../../img/icons/pin.png';


const Map = () => {
  const position = [50.866077, 20.628569];

  const customIcon = new Icon({
    iconUrl: PinIcon,
    iconSize: [38,38]
  })

  return (
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer 
        attribution="https://www.stadiamaps.com/"
        url='https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png'
        />
        <Marker position={position} icon={customIcon}>
        </Marker>
      </MapContainer>
    );
 };

 export default Map;