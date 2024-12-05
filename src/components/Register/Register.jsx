import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./Register.css";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="register-container">
      <h1>Crear una cuenta</h1>
      <div className="breadcrumb">
        <Link to="/">Inicio</Link> / Crear una cuenta
      </div>
      <form className="register-form">
        <label>
          Nombre
          <input type="text" placeholder="Nombre" required />
          <small>Solo se permiten caracteres alfabéticos (letras) y el punto (.), seguidos de un espacio.</small>
        </label>
        <label>
          Apellidos
          <input type="text" placeholder="Apellidos" required />
          <small>Solo se permiten caracteres alfabéticos (letras) y el punto (.), seguidos de un espacio.</small>
        </label>
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
        <label>
          Fecha de nacimiento (Opcional)
          <input type="date" placeholder="DD/MM/YYYY" />
          <small>(Ejemplo: 31/05/1970)</small>
        </label>
        <label>
          <input type="checkbox" />
          Recibir ofertas de nuestros socios
        </label>
        <label>
          <input type="checkbox" />
          Privacidad de los datos del cliente
          <small>
            Los datos personales que proporciona se utilizan para responder
            consultas, procesar pedidos o permitir el acceso a información
            específica. Tiene derecho a modificar y eliminar toda la información
            personal que se encuentra en la página "Mi cuenta".
          </small>
        </label>
        <label>
          <input type="checkbox" required />
          Acepto los términos y condiciones y la política de privacidad
        </label>
        <button type="submit" className="register-button">
          GUARDAR
        </button>
      </form>
    </div>
  );
};

export default Register;
