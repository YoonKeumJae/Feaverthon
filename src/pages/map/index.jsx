import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

export default function BasicMap() {
  return (
    <>
      <Map
        className="myMap"
        style={{ width: "500px", height: "500px" }}
        center={{ lat: 33.5563, lng: 126.79581 }}
        level={3}
      >
        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
          <div style={{ color: "#000" }}>월정리에옹</div>
        </MapMarker>
      </Map>
    </>
  );
}
