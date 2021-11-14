import Viewer from "@/features/Viewer";
import Home from "@/features/Home";

const routes = [
  {
    path: "/viewer",
    component: <Viewer />,
  },
  {
    path: "/",
    component: <Home />,
  },
];

export default routes;
