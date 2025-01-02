import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import Video from "./Video";

const createCustomIcon = (price) => {
  return L.divIcon({
    className: "custom-icon",
    html: `<div class="price-label">${price}</div>`,
    iconSize: [50, 20],
    iconAnchor: [25, 10],
  });
};

const locations = [
  { id: 1, lat: 36.1699, lng: -115.1398, price: "$84" },
  { id: 2, lat: 36.1627, lng: -115.1401, price: "$24" },
  { id: 3, lat: 36.1676, lng: -115.15, price: "$55" },
  { id: 4, lat: 36.1546, lng: -115.1531, price: "$461" },
  { id: 5, lat: 36.1215, lng: -165.1739, price: "$69" },
  { id: 6, lat: 36.1245, lng: -115.1739, price: "$90" },
  { id: 7, lat: 36.1115, lng: -115.1739, price: "$55" },
  { id: 8, lat: 36.1255, lng: -115.1749, price: "$1890" },
  { id: 9, lat: 36.121, lng: -110.1739, price: "$26" },
];

const MapWithPrices = () => {
  return (
    <>
      <div className="map">
        <div style={{ width: "100%", height: "500px" }}>
          <h2 class="map-title">World's Best Places To Visit</h2>
          <MapContainer
            center={[36.1699, -115.1398]}
            zoom={12}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {locations.map((location) => (
              <Marker
                key={location.id}
                position={[location.lat, location.lng]}
                icon={createCustomIcon(location.price)}
              />
            ))}
          </MapContainer>
        </div>
      </div>
      <Video />
    </>
  );
};

export default MapWithPrices;
