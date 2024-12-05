import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ productos }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      const results = productos.filter((producto) =>
        producto.nombre.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="header-logo">
          <Link to="/">
            <img src="/Imagenes/Logo.jpg" alt="TecnoOfertas" />
          </Link>
        </div>

        <div className="header-search">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Buscar productos..."
          />
          <button>
            <img src="/Imagenes/lupabusqueda.png" alt="Buscar" />
          </button>

          {filteredProducts.length > 0 && (
            <div className="search-results">
              {filteredProducts.map((producto) => (
                <Link key={producto.id} to={`/producto/${producto.id}`} className="search-result-item">
                  <img src={producto.imagen} alt={producto.nombre} className="search-result-img" />
                  <p>{producto.nombre}</p>
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="header-contact">
          <div>
            <img src="/Imagenes/telefono.png" alt="Teléfono" />
            <span>994691528</span>
          </div>
        </div>
      </div>

      <div className="header-nav">
        <ul>
          <li><Link to="/accesorios">Accesorios Apple</Link></li>
          <li><Link to="/especiales">Especial Pack</Link></li>
          <li><Link to="/audifonos">Audífonos</Link></li>
          <li><Link to="/smartwatch">Smartwatch</Link></li>
          <li><Link to="/cargadores">Cargadores</Link></li>
          <li><Link to="/cables">Cables</Link></li>
          <li><Link to="/cases">Cases</Link></li>
          <li><Link to="/micas">Micas</Link></li>
          <li><Link to="/smart-home">Smart Home</Link></li>
        </ul>
      </div>

      <div className="header-session">
        <Link to="/login" className="header-login-link">Iniciar sesión</Link>
        <Link to="/carrito" className="header-cart-link">
          <img src="/Imagenes/carrito.png" alt="Carrito" />
          <span>Carrito</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
