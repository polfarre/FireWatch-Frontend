import "./navbar.css";
import firewatch_logo from "/assets/images/firewatch_logo.svg";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container-firewatch">
        <div className="container-logo">
          <img className="logo" src={firewatch_logo} alt="FireWatch Logo"></img>
        </div>
        <NavLink  to='/' className="firewatch">FireWatch</NavLink>
      </div>
      <div className="container-register-navbar">
        <NavLink className='navlink' to="/login">Iniciar sesión</NavLink>
        <NavLink className='navlink' to="/signup">Registrarse</NavLink>
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
          <Link to="/" className="link">
            Cerrar sesión
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
