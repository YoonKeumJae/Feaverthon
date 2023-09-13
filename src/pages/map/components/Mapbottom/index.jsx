import React from "react";
import styled from "styled-components";

export default function Mapbottom() {
  const Bottom = styled.ul`
    display: flex;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 10vh;
    border: 1px solid black;
  `;
  
  const Bottomli = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    width: 20%;
    list-style-type: none;
  `;
  return (
    <div>
      <Bottom >
        <Bottomli><img src="#" alt="#" /></Bottomli>
        <Bottomli><img src="#" alt="#" /></Bottomli>
        <Bottomli><img src="#" alt="#" /></Bottomli>
        <Bottomli><img src="#" alt="#" /></Bottomli>
        <Bottomli><img src="#" alt="#" /></Bottomli>
      </Bottom>
    </div>
  );
}
