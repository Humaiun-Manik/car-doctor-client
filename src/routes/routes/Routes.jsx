import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/home/Home";
import SignUp from "../../pages/signup/signUp";
import Login from "../../pages/login/Login";
import ServiceDetails from "../../pages/serviceDetails/ServiceDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "service-details/:id",
        element: <ServiceDetails />,
      },
      {
        path: "register",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
