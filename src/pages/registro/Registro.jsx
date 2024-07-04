import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      latitud: parseFloat(formData.latitud),
      longitud: parseFloat(formData.longitud),
      temperatura: parseFloat(formData.temperatura),
      tamano: parseFloat(formData.tamano),
      intensidad: parseFloat(formData.intensidad),
    };

    try {
      const response = await fetch("http://localhost:8000/incendios/reportar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Envío de datos correcto", responseData);
        setShowNotification(true);
        setTimeout(() => {
          setShowNotification(false);
        }, 20000);
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
          <h2 className="form-subtitles">Latitud y Longitud*</h2>
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
              placeholder="Temperatura*"
              value={formData.temperatura}
              onChange={handleChange}
              required
            />
            <span className="input-suffix">°C</span>
            <input
              type="number"
              name="tamano"
              className="input-reg input-data"
              placeholder="tamano*"
              value={formData.tamano}
              onChange={handleChange}
              required
            />
            <span className="input-suffix">m²</span>
          </div>
          <h2 className="form-subtitles">Intensidad</h2>
          <div className="reg-container reg-suffix">
            <input
              type="number"
              name="intensidad"
              className="input-reg input-data"
              placeholder="Intensidad"
              value={formData.intensidad}
              onChange={handleChange}
              required
            />
            <span className="input-suffix">%</span>
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
        <button className="form-buttons" id="blue-button-reg">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Registro;
