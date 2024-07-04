import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout.jsx";
import Home from "../pages/home/Home.jsx";
import Registro from "../pages/registro/Registro.jsx";
import LoginUp from "../pages/login/LoginUp.jsx";
import SignUp from "../pages/signUp/SignUp.jsx";
import Profile from "../pages/profile/Profile.jsx";

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
        element: <LoginUp />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/myProfile",
        element: <Profile />,
      },
    ],
  },
]);
