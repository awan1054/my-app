import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./components/product/Product";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Home from "./components/Home";
import HomePage from "./pages/homePage";
import Register from "./components/Register";
import Profile from "./components/Profile";
import ThemeProvider from "./themeProvider";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <HomePage />,
  // },

  {
    path: "/",
    element: (
      <ThemeProvider>
        <div>hello</div>
        <Navbar />
        <Outlet />
        <Footer />
      </ThemeProvider>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/about",
        element: <di>about page</di>,
      },
      {
        path: "/home",
        Component: Product,
      },
      { path: "/profile", element: <Profile /> },
      {
        path: "*",
        element: <div>not found</div>,
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  { path: "/register", element: <Register /> },
]);

export default router;
