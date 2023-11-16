import React from "react";
import ReactDOM from "react-dom/client";

import ProviderTheme from "./providers/ProviderTheme.tsx";

import "./fonts/declareFont.css";
import "@/main.scss";

import { GlobalStyled } from "@/themes/defaultTheme.ts";
import { RouterProvider } from "react-router-dom";
import { router } from "@/routes/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProviderTheme>
      <GlobalStyled />
      <RouterProvider router={router} />
    </ProviderTheme>
  </React.StrictMode>
);
