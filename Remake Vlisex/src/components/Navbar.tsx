import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { flushSync } from "react-dom";
import { viewTrasition } from "@/utilities/viewTransition";
export default function Navbar() {
  const navigator = useNavigate();

  const handleClick = (to: string) => {
    viewTrasition(() => navigator(to));
  };
  return (
    <StyleNavbar>
      <div onClick={() => handleClick("/auth")}>Auth</div>
      <div onClick={() => handleClick("/store/home")}>Home</div>
    </StyleNavbar>
  );
}

const StyleNavbar = styled.div`
  background-color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;
