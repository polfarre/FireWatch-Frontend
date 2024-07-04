import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import './layout.css'

import { Outlet } from "react-router-dom";
import "./layout.css"


const Layout = () => {
  return (
    <div className="container-component">
      <div className="navbar-component">
        <Navbar />
      </div>
      <main>
        <Outlet />
      </main>
      <Footer className="footer-component" />
    </div>
  );
};

export default Layout;
