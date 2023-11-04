import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ProviderTheme from "./providers/ProviderTheme.tsx";

import "./fonts/declareFont.css";
import styled from "styled-components";

const GlobalStyled = styled.div`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "'Manrope',sans-serif";
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProviderTheme>
      <GlobalStyled>
        <App />
      </GlobalStyled>
    </ProviderTheme>
  </React.StrictMode>
);
