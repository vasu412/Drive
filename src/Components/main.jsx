import React from "react";
import ReactDOM from "react-dom/client";
import "../../src/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Drive from "./Drive";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero />,
  },
  {
    path: "/home",
    element: <Navbar />,
    children: [
      {
        path: "/home",
        element: <Drive />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
