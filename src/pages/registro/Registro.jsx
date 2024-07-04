import React, { useState } from "react";
import { useSearchParams } from 'react-router-dom';
import "./registro.css";

const Registro = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    latitud: searchParams.get('latitud') || "",
    longitud: searchParams.get('longitud') || "",
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
    const { latitud, longitud, temperatura, tamaño } = formData;

    if (
      !latitud ||
      !longitud ||
      !temperatura ||
      !tamaño
    ) {
      alert("Todos los campos marcados con * son obligatorios");
      return;
    }

    setShowNotification(true);
  };

  return (
    <div className="form-container">
      <form className="reg-form" onSubmit={handleSubmit}>
        <div className="reg-form-container">
          <h1 className="reg-title">Formulario de registro de incendio</h1>
          <h3 className="reg-subtitle">Rellene los siguientes campos:</h3>
          <h2 className="form-subtitles">Latitud y Longitud*</h2>{" "}
          <div className="reg-container">
            <input
              type="text"
              name="latitud"
              className="input-reg coord"
              placeholder="Latitud"
              value={formData.latitud}
              onChange={handleChange}
            />
            <input
              type="text"
              name="longitud"
              className="input-reg coord"
              placeholder="Longitud*"
              value={formData.longitud}
              onChange={handleChange}
            />
          </div>
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
              <article>
                Agradecemos su colaboración. Gracias por registrar un nuevo
                foco.
              </article>
            </div>
          )}
        </div>
        <button className="form-buttons" id="blue-button-reg" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Registro;
