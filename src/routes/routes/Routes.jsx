import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/home/Home";
import SignUp from "../../pages/signup/signUp";
import Login from "../../pages/login/Login";
import ServiceDetails from "../../pages/serviceDetails/ServiceDetails";
import NotFound from "../../pages/notFound/NotFound";
import CheckOut from "../../pages/checkOut/checkOut";

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
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "checkout/:id",
        element: <CheckOut />,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "register",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
