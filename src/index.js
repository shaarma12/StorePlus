import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import QueryPage from "./components/QueryPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login_screen",
    element: <LoginPage />,
  },
  {
    path: "/query_screen",
    element: <QueryPage />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
