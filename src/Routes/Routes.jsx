import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from '../Components/Root.jsx';
import ErrorPage from '../Components/ErrorPage.jsx';
import Home from '../Components/Home.jsx';
import ServiceDetails from '../Components/ServiceDetails.jsx';
import Register from "../Components/Register.jsx";
import Login from "../Components/Login.jsx";
import PrivateRoutes from "./PrivateRoutes.jsx";
import UpcommingEventsDetails from "../Components/UpcommingEventsDetails.jsx";

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
          element: <PrivateRoutes><ServiceDetails></ServiceDetails></PrivateRoutes>,
          loader: () => fetch("/services.json"),
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
          path: "/upcommingEvents",
          element: <UpcommingEventsDetails></UpcommingEventsDetails>,
          loader: ()=>fetch("/upcomingEvents.json")
        }
      ],
    },
  ]);

export default router;