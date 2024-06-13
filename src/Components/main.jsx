import React from "react";
import ReactDOM from "react-dom/client";
import "../../src/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Drive from "./Drive";
import Computer from "./Computers";
import Shared from "./Shared";
import { Provider } from "react-redux";
import store from "../config/store";
import Trash from "./trash";
import Spam from "./spam";
import Recent from "./Recent";
import Starred from "./Starred";
import Search from "./search";
import AI from "./AI";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <Hero />
      </Provider>
    ),
  },
  {
    path: "/ai",
    element: (
      <Provider store={store}>
        <AI />
      </Provider>
    ),
  },
  {
    path: "/home",
    element: (
      <Provider store={store}>
        <Navbar />
      </Provider>
    ),
    children: [
      {
        path: "/home",
        element: <Drive />,
      },
      {
        path: "/home/computer",
        element: <Computer />,
      },
      {
        path: "/home/shared",
        element: <Shared />,
      },
      {
        path: "/home/trash",
        element: <Trash />,
      },
      {
        path: "/home/spam",
        element: <Spam />,
      },
      {
        path: "/home/recent",
        element: <Recent />,
      },
      {
        path: "/home/starred",
        element: <Starred />,
      },
      {
        path: "/home/search",
        element: <Search />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
