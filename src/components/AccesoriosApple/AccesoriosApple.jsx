import React from "react";
import { productos } from "../Data/productos"; 
import { Link } from "react-router-dom";
import { useCarrito } from "../CarritoContext/CarritoContext";
import './AccesoriosApple.css'; 

const AccesoriosApple = () => {
  const { agregarProducto } = useCarrito(); 


  const agregarAlCarrito = (producto) => {
    agregarProducto(producto);
    alert(`${producto.nombre} ha sido añadido al carrito`);
  };

  return (
    <div>
      <h1>Accesorios Apple</h1>
      <div className="productos-container">
        <div className="productos-grid">
          {productos.map((producto) => (
            <div key={producto.id} className="producto-card">
              <img src={producto.imagen} alt={producto.nombre} />
              <h2>{producto.nombre}</h2>
              <p>Precio: {producto.precio}</p>
              <Link to={`/producto/${producto.id}`}>
                <button className="producto-btn">Ver detalles</button>
              </Link>
              <button
                className="producto-btn add-to-cart"
                onClick={() => agregarAlCarrito(producto)}
              >
                Añadir al carrito
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccesoriosApple;
