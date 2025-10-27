import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import CustomThemeProvider from "./theme/CustomThemeProvider.tsx";
import React from "react";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CustomThemeProvider>
      <App />
    </CustomThemeProvider>
  </React.StrictMode>
);
