import Viewer from "@/features/Viewer";
import Home from "@/features/Home";
import Login from "@/features/Auth/pages/Login";
import MainScreen from "@/features/Screen/MainScreen/MainScreen";
import { useRoutes } from "react-router-dom";
import Register from "@/features/Auth/pages/Register";
import MyModelScreen from "./features/Screen/MyModelScreen/MyModelScreen";
import MyModel from "@/features/MyModel";

const Routes = () => {
  const routes = useRoutes([
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
      element: <Register />,
    },
    {
      path: "/my-models",
      element: <MyModel />,
    },
    {
      path: "/my-models/create",
      element: <Viewer />,
    },
    {
      path: "/my-models/:id",
      element: <Viewer />,
    },
  ]);

  return routes;
};

export default Routes;
