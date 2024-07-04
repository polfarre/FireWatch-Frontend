import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout.jsx";
import Home from "../pages/home/Home.jsx";
import Registro from "../pages/registro/Registro.jsx";


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
    
    ],
  },
]);
