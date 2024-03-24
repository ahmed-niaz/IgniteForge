import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import Article from "../pages/Article";
import Bookmarks from "../pages/Bookmarks";
import Content from "../components/Content";
import Author from "../components/Author";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: "/blogs",
        element: <Blogs />,
        loader: () => fetch(`https://dev.to/api/articles?per_page=20&top=7`),
      },
      {
        path: "/blog/:id",
        element: <Article />,
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params.id}`),
          children: [
            {
                index: true,
                element: <Content/>,
                loader: ({ params }) =>
                fetch(`https://dev.to/api/articles/${params.id}`),
            },
            {
                path: 'author',
                element: <Author/>,
                loader: ({ params }) =>
                fetch(`https://dev.to/api/articles/${params.id}`),
            }
          ]
      },
      {
        path: "/bookmarks",
        element: <Bookmarks />,
      },
    ],
  },
]);


// 