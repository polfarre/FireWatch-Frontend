import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./registro.css";

const Registro = () => {
  const [formData, setFormData] = useState({
    latitud: "",
    longitud: "",
    temperatura: "",
    tamaño: "",
    intensidad: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formBody = Object.keys(formData)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(formData[key])
      )
      .join("&");

    try {
      const response = await fetch("http://localhost:8000/incendios/reportar", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Envío de datos correcto", data);
        localStorage.setItem("token", data.access_token);
        window.location.replace("/");
      } else {
        const errorData = await response.json();
        alert(errorData.detail || "Error al enviar los datos");
        console.error("Error al enviar los datos", errorData);
      }
    } catch (error) {
      alert(error.message || "Error al enviar los datos");
      console.error("Error al enviar los datos:", error);
    }
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
              required
            />
            <input
              type="text"
              name="longitud"
              className="input-reg coord"
              placeholder="Longitud*"
              value={formData.longitud}
              onChange={handleChange}
              required
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
              required
            />
            <span className="input-suffix">°C</span>
            <input
              type="number"
              name="tamaño"
              className="input-reg input-data"
              placeholder="Tamaño*"
              value={formData.tamaño}
              onChange={handleChange}
              required
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
        <button className="form-buttons" id="blue-button-reg" >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Registro;
