import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import StudentContextProvider from "./context/studentContext";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StudentContextProvider>
        <App />
      </StudentContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
