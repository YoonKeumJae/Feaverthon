import React from "react";
import styled from "styled-components";
import { Heart, Phone } from "@phosphor-icons/react";

export default function InList() {
  const StyleContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    .archiving .phone {
      width: 1rem;
      height: 2rem;
      border: 1px solid #979797;
    }
  `;
  return (
    <StyleContent>
      <div className="archiving">
        <button type="button" style={{ all: "unset" }}>
          <Heart size={24} />
        </button>
      </div>
      <div className="phone">
        <button type="button" style={{ all: "unset" }}>
          <Phone size={24} />
        </button>
      </div>
    </StyleContent>
  );
}
