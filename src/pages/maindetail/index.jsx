import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "@mui/material";
import { Map, ZoomControl } from "react-kakao-maps-sdk";

import Search from "../../components/Search";
import BottomNav from "../../components/BottomNav";
import Marker from "../../components/Marker";
import ResultList from "../../components/ResultList";

const { kakao } = window;

export default function DetailMap(props) {
  const Main = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
  `;
  const InMain = styled.div``;

  return (
    <Container maxWidth="xs">
      <Main>
        <Search />

        <InMain>
          <Map
            className="myMap"
            style={{
              width: "100vw",
              maxWidth: "444px",
              height: "calc(100svh - 7rem)",
              zIndex: "500",
            }}
            center={{ lat: 33.450705, lng: 126.570677 }}
            level={3}
          >
            <Marker />
            <ZoomControl position={"BOTTOMRIGHT"} />
          </Map>

          <BottomNav />
        </InMain>
      </Main>
    </Container>
  );
}
