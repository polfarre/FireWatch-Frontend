import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    grant_type: "password",
    scope: null,
    client_id: null,
    client_secret: null
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formBody = Object.keys(formData)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(formData[key]))
      .join('&');

    const response = await fetch("http://0.0.0.0:8000/usuarios/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: formBody
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Login exitoso:", data);
      navigate("/");
    } else {
      console.error("Error al iniciar sesión");
    }
  };

  return (
    <div className="form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="login-title">Inciar sesión</h1>
        <h3 id="sign-up">
          ¿No tienes cuenta?
          <NavLink to='/signup' className="text-blue">
            Registrarse
          </NavLink>
        </h3>
        <h2 className="form-subtitles">Nombre de usuario</h2>
        <input
          className="form-textarea"
          type="text"
          name="username"
          id="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <h2 className="form-subtitles">Contraseña</h2>
        <input
          className="form-textarea"
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button className="form-buttons" id="blue-button">
          Confirmar
        </button>
      </form>
    </div>
  );
};

export default Login;
