import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <h1>Iniciar sesión con su cuenta</h1>
      <div className="breadcrumb">
        <Link to="/">Inicio</Link> / Iniciar sesión con su cuenta
      </div>
      <form className="login-form">
        <label>
          Dirección de correo electrónico
          <input type="email" placeholder="Correo electrónico" required />
        </label>
        <label>
          Contraseña
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "OCULTAR" : "MOSTRAR"}
            </button>
          </div>
        </label>
        <div className="forgot-password">
          <a href="#">¿Olvidó su contraseña?</a>
        </div>
        <button type="submit" className="login-button">
          INICIAR SESIÓN
        </button>
        <div className="signup-link">
          ¿No tiene una cuenta? <Link to="/register">Cree una aquí</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
