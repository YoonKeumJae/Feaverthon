import React from "react";
import styled from "styled-components";
import heart from '/images/heart.png';
import home from '/images/home.png';
import menuicon from '/images/MenuIcon.png';
import search from '/images/searchnormal2.png';
import user from '/images/user.png';
export default function Mapbottom() {
  const Bottom = styled.ul`
    display: flex;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 10vh;
  `;

  const Bottomli = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    list-style-type: none;
  `;

  const Buttons = styled.button`
    all: unset;
    font-size:15pt;
  `;

  const ThirdButton = styled.button`
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:15pt;
    width:70px;
    height:70px;
    border-radius:50%;
    background-color: #097629;
    filter: drop-shadow(1px 2px 3px black);
  `;
  return (
    <div>
      <Bottom >
        <Bottomli><Buttons><img src={home} /></Buttons></Bottomli>
        <Bottomli><Buttons><img src={search} /></Buttons></Bottomli>
        <Bottomli><ThirdButton><img src={menuicon} /></ThirdButton></Bottomli>
        <Bottomli><Buttons><img src={heart} /></Buttons></Bottomli>
        <Bottomli><Buttons><img src={user} /></Buttons></Bottomli>
      </Bottom>
    </div>
  );
}
