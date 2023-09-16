import React, { useState } from "react";
import { Map } from "react-kakao-maps-sdk";
import styled from "styled-components";
import { MagnifyingGlass } from "@phosphor-icons/react";

export default function Search() {
  const SearchField = styled.div`
    display: flex;
    position: fixed;
    background-color: white;
    width: 40vw;
    min-width: 200px;
    height: 30px;
    top: 80px;

    border: 1px solid #097629;
    border-radius: 20px;
    z-index: 999;
    left: 50%;
    transform: translateX(-50%);
  `;
  const Searchbutton = styled.button`
    all: unset;
    margin: 2px 15px 0;
  `;

  const Searchinput = styled.input`
    width: 25vw;
    min-width: 120px;
    border: none;
    font-size: 12pt;
  `;

  return (
    <SearchField>
      <Searchbutton>
        <MagnifyingGlass />
      </Searchbutton>
      <Searchinput placeholder="지명 또는 음식점 이름 검색" />
    </SearchField>
  );
}
