import React, { useState } from "react";
import { Map } from "react-kakao-maps-sdk";
import styled from "styled-components";
import searchimg from "../../../../../../../../../../images/search-normal.png";

export default function Search() {
  const SearchField = styled.div`
    display: flex;
    position: fixed;
    background-color: white;
    width: 400px;
    height: 30px;
    top: 80px;

    border: 1px solid #097629;
    border-radius: 20px;
    z-index: 999;
  `;
  const Searchbutton = styled.button`
    all: unset;
    margin: 2px 15px 0;
  `;

  const Searchinput = styled.input`
    border: none;
    font-size: 12pt;
  `;
  return (
    <SearchField>
      <Searchbutton>
        <img src={searchimg} />
      </Searchbutton>
      <Searchinput placeholder="지명 또는 음식점 이름 검색" />
    </SearchField>
  );
}
