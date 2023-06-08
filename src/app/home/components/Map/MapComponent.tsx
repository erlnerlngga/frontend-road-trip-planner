"use client";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { ReactNode } from "react";
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";

L.Marker.prototype.options.icon = L.icon({
  iconUrl:
    "https://raw.githubusercontent.com/DerYeger/wiener-time/main/public/leaflet-images/map-marker.svg",
  iconRetinaUrl:
    "https://raw.githubusercontent.com/DerYeger/wiener-time/main/public/leaflet-images/map-marker.svg",
  iconSize: [24, 24],
  iconAnchor: [12, 24],
  shadowUrl:
    "https://raw.githubusercontent.com/DerYeger/wiener-time/main/public/leaflet-images/marker-shadow.png",
  shadowRetinaUrl:
    "https://raw.githubusercontent.com/DerYeger/wiener-time/main/public/leaflet-images/marker-shadow.png",
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
});

interface propTypes {
  children: ReactNode;
  optMap: { center: [number, number]; zoom: number };
}

export default function MapComponent({ children, optMap }: propTypes) {
  return (
    <MapContainer
      zoomControl={false}
      className="fixed right-0 top-0 h-screen w-full 2xl:w-2/3"
      {...optMap}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      <ZoomControl position="bottomright" />

      {children}
    </MapContainer>
  );
}
