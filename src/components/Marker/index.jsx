import React from "react";
import { Map, MapMarker, MarkerClusterer } from "react-kakao-maps-sdk";
import mapPin from "../../asset/images/mappin.svg"
import mapPin1 from "../../asset/images/mappin1.svg"
import mapPin2 from "../../asset/images/mappin2.svg"

const { kakao } = window;

const markings = {
  0: "mapPin",
  1: "mapPin1",
  2: "mapPin2"
}


export default function Marker() {
  const positions = [
    {
      title: "카카오",
      latlng: { lat: 33.450705, lng: 126.570677 },
      markings: 0,
    },
    {
      title: "생태연못",
      latlng: { lat: 33.450936, lng: 126.569477 },
      markings: 0,
    },
    {
      title: "텃밭",
      latlng: { lat: 33.450879, lng: 126.56994 },
      markings: 1,
    },
    {
      title: "근린공원",
      latlng: { lat: 33.451393, lng: 126.570738 },
      markings: 2,
    },
  ];
  return (
    <MarkerClusterer
      averageCenter={true} // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
      minLevel={5} // 클러스터 할 최소 지도 레벨
    >
      {
        positions.map((position, index) => (
          <MapMarker
            key={`${position.title}-${position.latlng}`}
            position={position.latlng}
            image={{
              src: position.markings == 0 ? mapPin : (position.markings == 1 ? mapPin1 : mapPin2),
              size: {
                width: 24,
                height: 35,
              },
            }}
            title={position.title}
          />
        ))
      }
    </MarkerClusterer>
  )
}
