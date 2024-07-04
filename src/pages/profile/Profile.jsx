import "./profile.css";
import React, { useState } from "react";

const Profile = () => {
  const [formData, setFormData] = useState({
    temperatura: "",
    tamaño: "",
    intensidad: "",
  });
  const [showNotification, setShowNotification] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { temperatura, tamaño } = formData;

    setShowNotification(true);
  };
  return (
    <div className="wrapper-forms">
      <div className="form-container">
        <form className="signIn-form">
          <h1 className="sign-title">Modificar perfil de usuario</h1>

          <label className="sign-subtitles" htmlFor="email">
            Nombre de usuario
          </label>
          <input
            className="form-input"
            type="usuario"
            name="usuario"
            id="usuario"
            placeholder="Nombre de usuario"
            required
          />
          <label className="sign-subtitles" htmlFor="email">
            Nombre completo
          </label>
          <input
            className="form-input"
            type="nombre"
            name="nombre"
            id="nombre"
            placeholder="Nombre completo"
            required
          />
          <label className="sign-subtitles" htmlFor="email">
            Email
          </label>
          <input className="form-input" type="email" name="email" id="email" placeholder="Email" required />
          <label className="sign-subtitles" htmlFor="phone">
            Teléfono
          </label>
          <input className="form-input" type="tel" name="telefono" id="phone" placeholder="Teléfono" />

          <button className="sign-buttons" id="blue-button-sign">
            Enviar
          </button>
        </form>
      </div>
      <div className="form-container">
        <form className="reg-form" onSubmit={handleSubmit}>
          <div className="reg-form-container">
            <h1 className="reg-title">Modificar incendio registrado</h1>
            <h3 className="reg-subtitle">Rellene los siguientes campos:</h3>
            <h2 className="form-subtitles">Temperatura y tamaño del foco*</h2>
            <div className="reg-container reg-suffix">
              <input
                type="number"
                name="temperatura"
                className="input-reg input-data"
                placeholder="Temperatura"
                value={formData.temperatura}
                onChange={handleChange}
              />
              <span className="input-suffix">°C</span>
              <input
                type="number"
                name="tamaño"
                className="input-reg input-data"
                placeholder="Tamaño*"
                value={formData.tamaño}
                onChange={handleChange}
              />
              <span className="input-suffix">km²</span>
            </div>
            <h2 className="form-subtitles">Intensidad</h2>
            <div className="reg-container reg-suffix">
              <input
                type="text"
                name="intensidad"
                className="input-reg input-data"
                placeholder="Intensidad"
                value={formData.intensidad}
                onChange={handleChange}
              />
            </div>
            {showNotification && (
              <div className="notification">
                <article>Agradecemos su colaboración. Gracias por registrar un nuevo foco.</article>
              </div>
            )}
          </div>
          <button className="reg-button" id="blue-button" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
