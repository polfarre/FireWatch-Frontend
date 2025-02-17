import React, { useState } from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    nombre: "",
    email: "",
    password: "",
    telefono: "",
    dni: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://0.0.0.0:8000/usuarios/registrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Usuario registrado:", data);
        navigate("/login");
      } else {
        const errorData = await response.json();
        alert(errorData.detail || "Error al registrar el usuario");
        console.error("Error al registrar el usuario:", errorData);
      }
    } catch (error) {
      alert(error.message || "Error al registrar el usuario");
      console.error("Error al registrar el usuario:", error);
    }
  };

  return (
    <div>
      <div className="form-container-sign">
        <form className="signIn-form" onSubmit={handleSubmit}>
          <h1 className="sign-title">Registrarse</h1>

          <label className="sign-subtitles" htmlFor="nombre">
            Nombre completo
          </label>
          <input
            className="form-input"
            type="text"
            name="nombre"
            id="usuanombrerio"
            placeholder="Nombre completo"
            value={formData.nombre}
            onChange={handleChange}
            required
          />

          <label className="sign-subtitles" htmlFor="username">
            Nombre de usuario
          </label>
          <input
            className="form-input"
            type="text"
            name="username"
            id="username"
            placeholder="Nombre de usuario"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <label className="sign-subtitles" htmlFor="email">
            Email
          </label>
          <input
            className="form-input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label className="sign-subtitles" htmlFor="password">
            Contraseña
          </label>
          <input
            className="form-input"
            type="password"
            name="password"
            id="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label className="sign-subtitles" htmlFor="telefono">
            Teléfono
          </label>
          <input
            className="form-input"
            type="tel"
            name="telefono"
            id="telefono"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={handleChange}
          />
          <label className="sign-subtitles" htmlFor="dni">
            DNI
          </label>
          <input
            className="form-input"
            type="text"
            name="dni"
            id="dni"
            placeholder="DNI"
            value={formData.dni}
            onChange={handleChange}
          />
          <button className="sign-buttons" id="blue-button-sign">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
