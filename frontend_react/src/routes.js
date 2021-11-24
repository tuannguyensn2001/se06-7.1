import Viewer from "@/features/Viewer";
import Home from "@/features/Home";
import Login from "@/features/Auth/pages/Login";
import { useRoutes } from "react-router-dom";
import Register from "./features/Auth/pages/Register";


const Routes = () => {
  const routes = useRoutes([
    {
      path: "/viewer/:id",
      element: <Viewer />,
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      component: <Register />,
    },
  ]);

  return routes;
};

export default Routes;
