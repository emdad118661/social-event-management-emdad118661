import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from '../Components/Root.jsx';
import ErrorPage from '../Components/ErrorPage.jsx';
import Home from '../Components/Home.jsx';
import ServiceDetails from '../Components/ServiceDetails.jsx';
import Register from "../Components/Register.jsx";
import Login from "../Components/Login.jsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/service/:id",
          element: <ServiceDetails></ServiceDetails>,
          loader: () => fetch("/services.json"),
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "/login",
            element: <Login></Login>
        }
      ],
    },
  ]);

export default router;