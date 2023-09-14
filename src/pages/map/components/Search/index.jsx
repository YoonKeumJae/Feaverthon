import React, { useState } from "react";
import { Map } from "react-kakao-maps-sdk";
import styled from "styled-components";

export default function Search() {
  const [value, setValue] = useState("");
  const [place, setPlace] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(value);
    setValue("");
  };

  return (
    <>
      <form className="inputForm" onSubmit={handleSubmit}>
        <input
          placeholder="검색어를 입력하세요"
          onChange={onChange}
          value={value}
        />
        <button type="submit">검색</button>
      </form>
    </>
  );
}
