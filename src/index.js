import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import StudentContextProvider from "./context/studentContext";
import ElectionContextProvider from "./context/electionContext";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ElectionContextProvider>
        <StudentContextProvider>
          <App />
        </StudentContextProvider>
      </ElectionContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
