import Viewer from "@/features/Viewer";
import Home from "@/features/Home";
import Login from "@/features/Auth/pages/Login";
import Register from "./features/Auth/pages/Register";

const routes = [
  {
    path: "/viewer",
    component: <Viewer />,
  },
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/login",
    component: <Login />,
  },
  {
    path: "/register",
    component: <Register />,
  },
];

export default routes;
