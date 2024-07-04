import "./login.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="form-container">
      <form className="login-form">
        <h1 className="login-title">Inciar sesión</h1>
        <h3 id="sign-up">
          ¿No tienes cuenta?
          <NavLink  to='/signup' className="text-blue" >
            Registrarse
          </NavLink>
        </h3>
        <h2 className="form-subtitles">Email</h2>
        <div className="container-textarea"></div>
        <input
          className="form-textarea"
          typeof="email"
          name="email"
          id="email"
          required
        >
          
        </input>
        <h2 className="form-subtitles">Contraseña</h2>
        <input
          className="form-textarea"
          typeof="password"
          name="password"
          id="contraseña"
          required
        >
          
        </input>
        <button className="form-buttons" id="blue-button">
          Confirmar
        </button>
        <p className="text-blue" id="forgot-password">
        </p>
      </form>
    </div>
  );
};

export default Login;
