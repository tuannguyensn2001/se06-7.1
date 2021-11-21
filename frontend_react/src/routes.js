import Viewer from "@/features/Viewer";
import Home from "@/features/Home";
import Login from "@/features/Auth/pages/Login";
import { useRoutes } from "react-router-dom";

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/viewer",
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
  ]);

  return routes;
};

export default Routes;
