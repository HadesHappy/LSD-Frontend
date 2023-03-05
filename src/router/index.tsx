import { useRoutes } from "react-router-dom";
import Landing from "../components/landing";
import Stake from "../components/stake";

const Routes = () => {
  const router = [
    {
      path: "/",
      element: <Landing />,
    },
    { path: "/stake", element: <Stake /> },
  ];

  return useRoutes(router);
};

export default Routes;
