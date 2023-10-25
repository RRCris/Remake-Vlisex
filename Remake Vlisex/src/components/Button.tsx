import React from "react";
import Typografy from "./Typografy";
import { styled } from "styled-components";

export default function Button() {
  return (
    <ButtonStyle>
      <Typografy />
    </ButtonStyle>
  );
}

const ButtonStyle = styled.div`
  background-color: red;
`;
