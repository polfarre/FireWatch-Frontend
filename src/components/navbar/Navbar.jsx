import "./navbar.css";
import firewatch_logo from "/assets/images/firewatch_logo.svg";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    // This effect runs once to check the token in localStorage on initial load
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    // You can navigate to the login page or home page after logout if needed
    // navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="container-firewatch">
        <div className="container-logo">
          <img className="logo" src={firewatch_logo} alt="FireWatch Logo"></img>
        </div>
        <NavLink to="/" className="firewatch">FireWatch</NavLink>
      </div>
      <div className="container-register-navbar">
        {!token && (
          <>
            <NavLink className='navlink' to="/login">Iniciar sesión</NavLink>
            <NavLink className='navlink' to="/signup">Registrarse</NavLink>
          </>
        )}
        <button
          onClick={toggleMenu}
          type="button"
          className="burger-button"
          aria-controls="navbar-sticky"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <svg
            className="burger-icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_iconCarrier">
              <path
                d="M5 12H20"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
              <path
                d="M5 17H20"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
              <path
                d="M5 7H20"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
            </g>
          </svg>
        </button>
      </div>
      {token && (
        <ul className={`menu-list ${isOpen ? "open" : ""}`} id="navbar-sticky">
          <li>
            <Link to="/" className="link">
              Mi perfil
            </Link>
          </li>
          <li>
            <NavLink to="/registro" className="link">
              Registrar incendio
            </NavLink>
          </li>
          <li>
            <Link to="/" onClick={handleLogout} className="link">
              Cerrar sesión
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
