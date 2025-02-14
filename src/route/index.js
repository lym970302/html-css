import { createBrowserRouter, Navigate } from "react-router-dom";
import { Layout } from "../pages/Layout";
import { Message } from "../pages/Message";
import { Process } from "../pages/Process";
import { Town } from "../pages/Town";
import Login from "../pages/Login/login";
import AuthRoute from "../components/AuthRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthRoute>
        <Layout />
      </AuthRoute>
    ),
    children: [
      {
        path: "/",
        element: <Navigate to="/Town" />,
      },
      {
        path: "/Town",
        element: <Town />,
      },
      {
        path: "/Message",
        element: <Message />,
      },
      {
        path: "/Process",
        element: <Process />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
