import React, { useState } from "react";
import "./registro.css";

const Registro = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    contacto: "",
    dni: "",
    latitud: "",
    longitud: "",
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
    const {
      nombre,
      correo,
      contacto,
      dni,
      latitud,
      longitud,
      temperatura,
      tamaño,
    } = formData;

    if (
      !nombre ||
      !correo ||
      !contacto ||
      !dni ||
      !latitud ||
      !longitud ||
      !temperatura ||
      !tamaño
    ) {
      alert("Todos los campos son obligatorios");
      return;
    }

    setShowNotification(true);
  };

  return (
    <div className="formRegist">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="formTitle">Formulario de registro de incendio</h1>
        <h3 className="formSubtitle">Rellene los siguientes campos:</h3>
        <div className="columns">
          <div className="column">
            <fieldset>
              <legend>Datos de contacto</legend>
              <div className="registContainer">
                <input
                  type="text"
                  name="nombre"
                  className="inputRegist"
                  placeholder="Nombre completo*"
                  value={formData.nombre}
                  onChange={handleChange}
                />
              </div>
              <div className="registContainer">
                <input
                  type="email"
                  name="correo"
                  className="inputRegist"
                  placeholder="Correo electrónico*"
                  value={formData.correo}
                  onChange={handleChange}
                />
              </div>
              <div className="registContainer">
                <input
                  type="tel"
                  name="contacto"
                  className="inputRegist"
                  placeholder="Número de contacto*"
                  value={formData.contacto}
                  onChange={handleChange}
                />
              </div>
              <div className="registContainer">
                <input
                  type="text"
                  name="dni"
                  className="inputRegist"
                  placeholder="DNI*"
                  value={formData.dni}
                  onChange={handleChange}
                />
              </div>
            </fieldset>
          </div>
          <div className="column">
            <fieldset>
              <legend>Ubicación y datos del foco</legend>
              <div className="registContainer">
                <input
                  type="text"
                  name="latitud"
                  className="inputRegist coord"
                  placeholder="Latitud*"
                  value={formData.latitud}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="longitud"
                  className="inputRegist coord"
                  placeholder="Longitud*"
                  value={formData.longitud}
                  onChange={handleChange}
                />
              </div>
              <div className="registContainer">
                <input
                  type="number"
                  name="temperatura"
                  className="inputRegist dates"
                  placeholder="Temperatura*"
                  value={formData.temperatura}
                  onChange={handleChange}
                />
                <span className="inputSuffix">°C</span>
                <input
                  type="number"
                  name="tamaño"
                  className="inputRegist dates"
                  placeholder="Tamaño*"
                  value={formData.tamaño}
                  onChange={handleChange}
                />
                <span className="inputSuffix">km²</span>
              </div>
              <div className="registContainer">
                <input
                  type="text"
                  name="intensidad"
                  className="inputRegist dates"
                  placeholder="Intensidad*"
                  value={formData.intensidad}
                  onChange={handleChange}
                />
              </div>
            </fieldset>
          </div>
        </div>

        {/* Notificación */}
        {showNotification && (
          <div className="notification">
            <article>
              Agradecemos su colaboración. Gracias por registrar un nuevo foco.
            </article>
          </div>
        )}

        {/* Botón de Enviar */}
        <button className="registButton" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Registro;
