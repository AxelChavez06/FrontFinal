import React, { useState } from "react";
import "./Banner.css";

const Banner = ({ imagenes }) => {
  const [indexActual, setIndexActual] = useState(0);

  const avanzar = () => {
    setIndexActual((prevIndex) => (prevIndex + 1) % imagenes.length);
  };

  const retroceder = () => {
    setIndexActual((prevIndex) =>
      prevIndex === 0 ? imagenes.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="banner-container">
      <button className="flecha izquierda" onClick={retroceder}>
        {"<"}
      </button>
      <img
        src={imagenes[indexActual]}
        alt={`Imagen ${indexActual + 1}`}
        className="banner-imagen"
      />
      <button className="flecha derecha" onClick={avanzar}>
        {">"}
      </button>
    </div>
  );
};

export default Banner;
