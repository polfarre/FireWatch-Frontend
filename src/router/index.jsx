import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout.jsx";
import Home from "../pages/home/Home.jsx";
import Registro from "../pages/registro/Registro.jsx";
import SignUp from "../pages/signUp/SignUp.jsx";
import Login from "../pages/loginUp/Login.jsx";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/registro",
        element: <Registro />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);
