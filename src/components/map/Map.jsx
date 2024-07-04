import React, { useEffect } from 'react'
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

const createCustomIcon = (color) => {
  return L.divIcon({
    html: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="${color}" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin">
             <path d="M21 10c0 7.571-9 13-9 13s-9-5.429-9-13a9 9 0 1 1 18 0z"></path>
             <circle cx="12" cy="10" r="3"></circle>
           </svg>`,
    className: '',
    iconSize: [24, 24],
    iconAnchor: [12, 24],
    popupAnchor: [0, -24],
  });
};

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
    searchLabel: 'Busca tu ciudad',
    showPopup: true,
    popupFormat: ({ result }) => {
      return `
        <div>
          <strong>Ciudad:</strong> ${result.label} <br />
          <strong>Latitud:</strong> ${result.y} <br />
          <strong>Longitud:</strong> ${result.x} <br />
          <button id="buttonIncident">Reportar un incendio</button>
        </div>
      `;
    },
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
        const fireIcon = createCustomIcon("#0476FF");
        L.marker([latitude, longitude], { icon: fireIcon }).addTo(map)
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

const getColorByIntensity = (intensity) => {
  if (intensity < 30) {
    return "#FFBE04";
  }
  if (intensity < 60) {
    return "#FF8D04";
  }
  else {
    return "#FF0404";
  }
};

const FireMarkers = () => {
  const map = useMap();

  useEffect(() => {
    const apiURL = 'http://0.0.0.0:8000/incendios/';

    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data.forEach((fire) => {
          const [fecha, hora] = fire.fecha_hora_adq.split('T');
          const color = getColorByIntensity(fire.intensidad);
          const fireIcon = createCustomIcon(color);

          L.marker([fire.latitud, fire.longitud], { icon: fireIcon }).addTo(map)
            .bindPopup(
              `
                <div>
                  <strong>Incendio reportado</strong> <br/>
                  <strong>Latitud:</strong> ${fire.latitud} <br/>
                  <strong>Longitud:</strong> ${fire.longitud} <br/>
                  <strong>Fecha:</strong> ${fecha} <br/>
                  <strong>Hora:</strong> ${hora.split('.')[0]} <br/>
                  <strong>Temperatura:</strong> ${fire.temperatura}C°<br/>
                  <strong>Area afectada:</strong> ${fire.tamano}m² <br/>
                  <strong>Intensidad:</strong> ${fire.intensidad}% <br/>
                <div/>
              `
            )
        });
      })
      .catch((error) => console.error('Error:', error));
  }, [map]);

  return null;
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
           <FireMarkers />
        </MapContainer>
  )
}

export default Map
