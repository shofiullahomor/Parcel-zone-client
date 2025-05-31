import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../MainLayouts.jsx/MainLayouts";
import Home from "./../Pages/Home";
import Login from "../Pages/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
export default router;
