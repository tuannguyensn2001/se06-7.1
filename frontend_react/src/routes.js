import Viewer from "@/features/Viewer";
import Home from "@/features/Home";
import Login from "@/features/Auth/pages/Login";
import MainScreen from "@/features/Screen/MainScreen/MainScreen";
import { useRoutes } from "react-router-dom";

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
      path: "/home",
      element: <MainScreen/>
    }
  ]);

  return routes;
};

export default Routes;
