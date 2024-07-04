import "./signup.css";

const SignUp = () => {
  return (
    <div>
      <div className="form-container">
        <form className="signIn-form">
          <h1 className="sign-title">Registrarse</h1>
         
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
            Email
          </label>
          <input
            className="form-input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
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
            required
          />
          <label className="sign-subtitles" htmlFor="phone">
            Teléfono
          </label>
          <input
            className="form-input"
            type="tel"
            name="telefono"
            id="phone"
            placeholder="Teléfono"
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
