import React from 'react'
import 'leaflet/dist/leaflet.css'
import {MapContainer, Marker, Popup} from 'react-leaflet'
import L from 'leaflet'
import { TileLayer } from 'react-leaflet'
import './map.css'


const Map = () => {
  return (
        <MapContainer
          className="full-height-map"
          center={[40.463667, -3.74922]}
          zoom={6}
          minZoom={3}
          maxZoom={19}
          scrollWheelZoom={true}>
            <TileLayer
             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
           />
        </MapContainer>
  )
}

export default Map
