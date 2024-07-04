import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import './layout.css'

import { Outlet } from "react-router-dom";
import "./layout.css"


const Layout = () => {
  return (
    <div className="container-component">
        <Navbar />
      <main className="main-container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
