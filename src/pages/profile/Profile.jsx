import "./profile.css";
import React, { useState } from "react";

const Profile = () => {
  const [formData, setFormData] = useState({
    temperatura: "",
    tamaño: "",
    intensidad: "",
  });
  const [showNotification, setShowNotification] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { temperatura, tamaño } = formData;

    setShowNotification(true);
  };

  const handleEditButtonClick = () => {
    setShowEditForm(true);
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
            Editar
          </button>
        </form>
      </div>
      <div className="form-container">
        <form className="reg-form" onSubmit={handleSubmit}>
          <div className="reg-form-container">
            <h1 className="reg-title">Modificar incendio registrado</h1>
            <strong>Selecciona editar o eliminar:</strong>
            <div className="reported-fire-container">
              <p>Incidencia nº91989</p>
              <div className="wrapper-buttons">
                <svg
                  className="delete-button"
                  width="25px"
                  height="25px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M10 11V17"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M14 11V17"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M4 7H20"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
                <svg
                  className="edit-button"
                  onClick={handleEditButtonClick}
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <title></title>
                    <g id="Complete">
                      <g id="edit">
                        <g>
                          <path
                            d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8"
                            fill="none"
                            stroke="#000000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          ></path>
                          <polygon
                            fill="none"
                            points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8"
                            stroke="#000000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          ></polygon>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </form>
      </div>
      {showEditForm && (
        <div className="form-container form-edit-fire">
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
              Editar
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Profile;
