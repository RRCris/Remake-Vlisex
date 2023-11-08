import React from "react";
import Typografy from "@/components/Typografy";
import { styled } from "styled-components";
import { md, sm } from "@/responsive/models";

export default function Button() {
  return (
    <ButtonStyle bg="red">
      <Typografy />
    </ButtonStyle>
  );
}

const ButtonStyle = styled.div<{ bg: string }>`
  background-color: ${(props) => props.bg};
  color: #fff;

  ${sm} {
    background-color: #cc9;
  }
  ${md} {
    background-color: #99c;
  }
`;
