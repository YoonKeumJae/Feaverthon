import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "@mui/material";
import {
  Map,
  MapMarker,
  MapTypeControl,
  ZoomControl,
} from "react-kakao-maps-sdk";

import Search from "../../components/Search";
import BottomNav from "../../components/BottomNav";
import Marker from "../../components/Marker";
import mappin from "../../asset/images/mappin.svg";

const { kakao } = window;

export default function BasicMap(props) {
  const Main = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
  `;
  const InMain = styled.div``;

  return (
    <Container maxWidth="xs" style={{ border: "1px solid black" }}>
      <Main>
        <Search />
        <InMain>
          <Map
            className="myMap"
            style={{ width: "50vh", height: "90vh" }}
            center={{ lat: 33.450705, lng: 126.570677 }}
            level={3}
          >
            <Marker />
          </Map>
          <BottomNav />
        </InMain>
      </Main>
    </Container>
  );
}
