import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../MainLayouts.jsx/MainLayouts";
import Home from "./../Pages/Home";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import About from "../Components/About";
import Contact from "../Components/Contact";
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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Registration />,
      },
    ],
  },
]);
export default router;
