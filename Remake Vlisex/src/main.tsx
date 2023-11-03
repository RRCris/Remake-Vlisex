import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ProviderTheme from "./providers/ProviderTheme.tsx";

import "./fonts/declareFont.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProviderTheme>
      <App />
    </ProviderTheme>
  </React.StrictMode>
);
