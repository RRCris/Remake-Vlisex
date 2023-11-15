import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ProviderTheme from "./providers/ProviderTheme.tsx";

import "./fonts/declareFont.css";
import "@/main.scss";

import { GlobalStyled } from "@/themes/defaultTheme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProviderTheme>
      <GlobalStyled />
      <App />
    </ProviderTheme>
  </React.StrictMode>
);
