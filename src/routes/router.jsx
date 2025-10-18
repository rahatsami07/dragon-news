import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "category/:id", // ✅ correct, no extra brace
        element: <CategoryNews />,
        loader: () => fetch("/news.json"), // ✅ public folder
      },
    ],
  },
]);

export default router;
