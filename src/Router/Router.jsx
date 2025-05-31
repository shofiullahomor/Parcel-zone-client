import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../MainLayouts.jsx/MainLayouts";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
  },
]);
export default router;
