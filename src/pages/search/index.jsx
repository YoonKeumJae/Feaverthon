import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { Map } from "react-kakao-maps-sdk";
import Search from "../../components/Search";

const getCurrentLocation = async (setPosition) => {
  await navigator.geolocation.getCurrentPosition((position) => {
    setPosition({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  });
};

export default function SearchPage() {
  const [position, setPosition] = useState({ lat: 33.450705, lng: 126.570677 });

  useEffect(() => {
    getCurrentLocation(setPosition);
  }, []);

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
      <Search />
      {position.lat !== 33.450705 ? (
        <Map
          className="myMap"
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            height: "100svh",
          }}
          center={position}
          level={3}
        />
      ) : (
        "loading..."
      )}
    </Container>
  );
}
