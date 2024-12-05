import React from 'react';
import { useCarrito } from '../CarritoContext/CarritoContext';  
import './Carrito.css'; 

const Carrito = () => {
  const { carrito, eliminarProducto, actualizarCantidad } = useCarrito();

  const handleEliminar = (id) => {
    eliminarProducto(id);
  };

  const handleCantidadChange = (id, e) => {
    const nuevaCantidad = parseInt(e.target.value);
    if (nuevaCantidad > 0) {
      actualizarCantidad(id, nuevaCantidad);
    }
  };

  return (
    <div className="carrito-container">
      <h1>Carrito de compras</h1>
      {carrito.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <ul>
          {carrito.map((producto) => (
            <li key={producto.id} className="producto-item">
              <div className="producto-info">
                <img src={producto.imagen} alt={producto.nombre} className="producto-img" />
                <div>
                  <h3>{producto.nombre}</h3>
                  <p>{producto.precio}</p>
                </div>
              </div>
              <div className="producto-actions">
                <input
                  type="number"
                  value={producto.cantidad}
                  min="1"
                  onChange={(e) => handleCantidadChange(producto.id, e)}
                  className="cantidad-input"
                />
                <button
                  onClick={() => handleEliminar(producto.id)}
                  className="btn eliminar-btn"
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Carrito;
