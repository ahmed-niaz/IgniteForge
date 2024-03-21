import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from './layout/Layout'
import Home from './pages/Home'
import Bookmarks from "./pages/Bookmarks";
import Blogs from "./pages/Blogs";
import Article from "./pages/Article";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
         loader: ()=> fetch(`https://dev.to/api/articles?per_page=20&top=7`),
      },
      {
        path: '/blog/:id',
        element: <Article/>

      },
      {
        path: "/bookmarks",
        element: <Bookmarks />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
