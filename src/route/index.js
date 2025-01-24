import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../pages/Layout";
import { Message } from "../pages/Message";
import { Process } from "../pages/Process";
import { Town } from "../pages/Town";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
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
]);

export default router;
