import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DAppProvider } from "@usedapp/core";
import { config } from "./utils/config";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
    ,
  </React.StrictMode>
);
