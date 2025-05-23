import { createBrowserRouter, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Category from "./category/category";
import Product from "./product/Product";
import ProductOfCategoryPage from "./components/ProductOfCategoryPage";
import SingleProductPage from "./product/singleProductPage";

const singleProduct = {
  path: ":productId",
  element: <SingleProductPage />,
};
const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <HomePage />,
  // },

  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
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

      { path: "/profile", element: <Profile /> },
      {
        path: "*",
        element: <div>not found</div>,
      },
      {
        path: "category",
        children: [
          {
            index: true,
            element: <Category />,
          },
          {
            path: ":catgId",
            children: [
              {
                index: true,
                element: <ProductOfCategoryPage />,
              },
              singleProduct,
            ],
          },
        ],
      },
      {
        path: "/product",
        children: [{ index: true, element: <Product /> }, singleProduct],
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
