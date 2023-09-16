import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "@mui/material";
import { Map, ZoomControl } from "react-kakao-maps-sdk";

import Search from "../../components/Search";
import BottomNav from "../../components/BottomNav";
import Marker from "../../components/Marker";
import ResultList from "../../components/ResultList";

const { kakao } = window;

export default function BasicMap(props) {
  const Main = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
  `;
  const InMain = styled.div`
    width: 100%;
  `;

  return (
    <Container
      maxWidth="xs"
      sx={{
        p: 0,
        position: "absolute",
        zIndex: 0,
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <div style={{ overflow: "hidden" }}>
        <Main>
          <Search />

          <InMain>
            <Map
              className="myMap"
              style={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                height: "100svh",
              }}
              center={{ lat: 33.450705, lng: 126.570677 }}
              level={3}
            >
              <Marker />
            </Map>

            <ResultList />

            <BottomNav />
          </InMain>
        </Main>
      </div>
    </Container>
  );
}
