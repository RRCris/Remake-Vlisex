import { App } from "@/App";
import AuthPage from "@/Pages/AuthPage";
import ErrorPage from "@/Pages/ErrorPage";
import LayoutStore from "@/Pages/LayoutStore";
import StoreHome from "@/Pages/StoreHome";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "/store",
    element: <LayoutStore />,
    children: [
      {
        path: "home",
        element: <StoreHome />,
      },
    ],
  },
]);
