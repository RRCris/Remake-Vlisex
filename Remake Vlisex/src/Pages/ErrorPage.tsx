import Typografy from "@/components/Typografy";
import React from "react";
import styled from "styled-components";

export default function ErrorPage() {
  return (
    <StyleErrorPage>
      <div className="container">
        <Typografy>Oops!</Typografy>
        <Typografy>Hubo algun error inesperado</Typografy>
      </div>
    </StyleErrorPage>
  );
}

const StyleErrorPage = styled.div`
  height: 100vh;

  & .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }
`;
