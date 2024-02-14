import React, { useState } from "react";
import "./global.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
// components
import { Header, Footer } from "./2-component/index";
// Pages
import {
  Home,
  Shop,
  Blog,
  About,
  Review,
  Contact,
  Favorite,
  Cart,
  DetailsProduct,
  SearchResult,
} from "./3-pages/index";
const App = () => {
  const [infoBtnFilterPro, setInfoBtnFilterPro] = useState(true);

  const route = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/shop",
          element: (
            <Shop
              infoBtnFilterPro={infoBtnFilterPro}
              setInfoBtnFilterPro={setInfoBtnFilterPro}
            />
          ),
        },
        {
          path: "/shop/:name",
          element: (
            <Shop
              infoBtnFilterPro={infoBtnFilterPro}
              setInfoBtnFilterPro={setInfoBtnFilterPro}
            />
          ),
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/review",
          element: <Review />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/detailsProduct/:id",
          element: <DetailsProduct />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/favorite",
          element: <Favorite />,
        },
        {
          path: "/searchResult",
          element: <SearchResult />,
        },
      ],
    },
  ]);
  return <RouterProvider router={route} />;
};
export default App;
