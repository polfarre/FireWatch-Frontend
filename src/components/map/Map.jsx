import React from 'react'
import 'leaflet/dist/leaflet.css'
import {MapContainer, Marker, Popup} from 'react-leaflet'
import L from 'leaflet'
import { TileLayer } from 'react-leaflet'
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { useMap } from 'react-leaflet';
import 'leaflet-geosearch/dist/geosearch.css';
import './map.css'

// Esta es la solucion del bug de los iconos
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const SearchField = () => {
  const map = useMap();
  const provider = new OpenStreetMapProvider({
    params: {
      countrycodes: 'ES', 
    },
  });

  const searchControl = new GeoSearchControl({
    provider,
    style: 'bar',
    autoClose: true,
    keepResult: true,
    searchLabel: 'Busca tu ciudad'
  });

  React.useEffect(() => {
    map.addControl(searchControl);

    return () => map.removeControl(searchControl);
  }, [map, searchControl]);

  return;
};

const Map = () => {
  return (
        <MapContainer
          className="fullHeightMap"
          center={[40.463667, -3.74922]}
          zoom={6}
          minZoom={3}
          maxZoom={19}
          scrollWheelZoom={true}>
            <TileLayer
             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
           />
           <SearchField />
           <Marker
              key="1"
              position={[40.463667, -3.74922]}>
              <Popup>
                Spain
                <br />
              </Popup>
            </Marker>
        </MapContainer>
  )
}

export default Map
