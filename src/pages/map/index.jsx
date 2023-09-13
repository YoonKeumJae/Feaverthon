import React, { useState } from "react";
import styled from "styled-components";
import {
  Map,
  MapMarker,
  MapTypeControl,
  ZoomControl,
} from "react-kakao-maps-sdk";
import Mapbottom from "./components/Mapbottom";

export default function BasicMap() {
  const positions = [
    {
      title: "카카오",
      latlng: { lat: 33.450705, lng: 126.570677 },
    },
    {
      title: "생태연못",
      latlng: { lat: 33.450936, lng: 126.569477 },
    },
    {
      title: "텃밭",
      latlng: { lat: 33.450879, lng: 126.56994 },
    },
    {
      title: "근린공원",
      latlng: { lat: 33.451393, lng: 126.570738 },
    },
  ];

  const Main = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
    border: 1px solid black;
  `;
  const InMain = styled.div``;
  return (
    <Main>
      <InMain>
        <Map
          className="myMap"
          style={{ width: "50vh", height: "90vh" }}
          center={{ lat: 33.5563, lng: 126.79581 }}
          level={3}
        >
          {positions.map((position, index) => (
            <MapMarker
              key={`${position.title}-${position.latlng}`}
              position={position.latlng}
              image={{
                src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
                size: {
                  width: 24,
                  height: 35,
                },
              }}
              title={position.title}
            />
          ))}
          <MapTypeControl position={"TOPRIGHT"} />
          <ZoomControl position={"RIGHT"} />
        </Map>
        <Mapbottom />
      </InMain>
    </Main>
  );
}
