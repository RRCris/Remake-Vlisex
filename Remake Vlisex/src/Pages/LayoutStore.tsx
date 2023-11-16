import Navbar from "@/components/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export default function LayoutStore() {
  return (
    <StyleLayoutStore>
      <Navbar />
      {<Outlet />}
    </StyleLayoutStore>
  );
}

const StyleLayoutStore = styled.div`
  background-color: lightblue;
`;
