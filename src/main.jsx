import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./i18n";
import "./styles/index.css";
import "./styles/particles.css";
import "./styles/animations.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.jsx";
import { ThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ThemeProvider>
  </StrictMode>
);
