import React from "react";
import styled from "styled-components";
import { Heart, Phone } from "@phosphor-icons/react";

export default function InList() {
  const StyleContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .archiving .phone {
      width: 1rem;
      height: 2rem;
      border: 1px solid #979797;
    }
  `;
  return (
    <StyleContent>
      <div className="archiving">
        <button style={{ all: "unset" }}>
          <Heart />
        </button>
      </div>
      <div className="phone">
        <button style={{ all: "unset" }}>
          <Phone />
        </button>
      </div>
    </StyleContent>
  );
}
