import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./route";
import ThemeProvider from "./providers/ThemeProvider";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>

  // </StrictMode>
);
