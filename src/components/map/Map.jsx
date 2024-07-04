import React from 'react'
import 'leaflet/dist/leaflet.css'
import {MapContainer, TileLayer, ZoomControl} from 'react-leaflet'
import L from 'leaflet'
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { useMap } from 'react-leaflet';
import 'leaflet-geosearch/dist/geosearch.css';
import './map.css'

// bug solution
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

const LocateControl = () => {
  const map = useMap();
  const handleLocate = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        map.flyTo([latitude, longitude], 13);
        L.marker([latitude, longitude]).addTo(map)
        .bindPopup(`${latitude} , ${longitude} <br/>
          <button id="buttonIncident">Reportar un incendio</button>`
        )
        .openPopup();
      }, (error) => {
        console.error('Error getting location: ', error);
        alert('Unable to retrieve your location');
      });
    } else {
      alert('Geolocation is not supported by your browser');
    }
  };
  return (

  <button
    onClick={handleLocate}
    id="buttonLocation">
  </button>
  );
  };

const Map = () => {
  return (
        <MapContainer
          className="fullHeightMap"
          center={[40.463667, -3.74922]}
          zoom={6}
          minZoom={3}
          maxZoom={19}
          scrollWheelZoom={true}
          zoomControl={false}
          >
            <TileLayer
             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
           />
           <SearchField />
            <LocateControl />
            <ZoomControl position="bottomright" />
        </MapContainer>
  )
}

export default Map
