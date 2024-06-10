import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ProviderTree } from "./providers";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProviderTree>
      <App />
    </ProviderTree>
  </React.StrictMode>
);
