import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import "./LandingPage.css";

const LandingPage = ({ productos, searchQuery }) => { 
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);

  const banners = [
    "/public/Imagenes/banner1.jpg",
    "/public/Imagenes/banner2.jpg",
    "/public/Imagenes/banner3.jpg",
    "/public/Imagenes/banner4.jpg",
    "/public/Imagenes/banner5.jpg",
  ];

  const productosDestacados = [
    { id: 1, nombre: "(Apple) Magic Mouse 2da Generación", imagen: "/public/Imagenes/destacado1.jpg", precio: "S/395" },
    { id: 2, nombre: "Macbook Pro Matte Case 13", imagen: "/public/Imagenes/destacado2.jpg", precio: "S/51" },
    { id: 3, nombre: "Iron Hub", imagen: "/public/Imagenes/destacado3.jpg", precio: "S/51" },
    { id: 4, nombre: "Macbook Screen Glass", imagen: "/public/Imagenes/destacado4.jpg", precio: "S/49" },
  ];

  const handleProductClick = (productoId) => {
    navigate(`/producto/${productoId}`);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? banners.length - 1 : prevIndex - 1));
  };

  const filteredProducts = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredFeaturedProducts = productosDestacados.filter((producto) =>
    producto.nombre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="landing-page">
      <div className="banner-container">
        <div
          className="banner-images"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {banners.map((banner, index) => (
            <img key={index} src={banner} alt={`Banner ${index + 1}`} className="banner-image" />
          ))}
        </div>
        <button className="banner-arrow left" onClick={handlePrev}>
          ❮
        </button>
        <button className="banner-arrow right" onClick={handleNext}>
          ❯
        </button>
      </div>

      <div className="launch-text">
        Nuevo <span className="launch-green">Lanzamiento</span>
      </div>

      <div className="productos-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((producto) => (
            <div key={producto.id} className="producto-card" onClick={() => handleProductClick(producto.id)}>
              <img src={producto.imagen} alt={producto.nombre} className="producto-img" />
              <h3>{producto.nombre}</h3>
              <p>{producto.precio}</p>
              <Link to="/carrito">
                <button className="add-to-cart">Añadir al carrito</button>
              </Link>
            </div>
          ))
        ) : (
          <p>No se encontraron productos para tu búsqueda.</p>
        )}
      </div>

      <div className="banner-below">
        <img src="/public/Imagenes/bannermediano.png" alt="Banner Promocional" className="banner-image" />
      </div>

      <div className="highlighted-text">
        Productos <span className="highlighted-green">Destacados</span>
      </div>

      <div className="productos-container">
        {filteredFeaturedProducts.length > 0 ? (
          filteredFeaturedProducts.map((producto) => (
            <div key={producto.id} className="producto-card" onClick={() => handleProductClick(producto.id)}>
              <img src={producto.imagen} alt={producto.nombre} className="producto-img" />
              <h3>{producto.nombre}</h3>
              <p>{producto.precio}</p>
              <Link to="/carrito">
                <button className="add-to-cart">Añadir al carrito</button>
              </Link>
            </div>
          ))
        ) : (
          <p>No se encontraron productos destacados para tu búsqueda.</p>
        )}
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Tecnoofertas Peru</h3>
            <p>Oficinas</p>
            <p>Calle Jamaica 145 - Chorrillos</p>
          </div>
          <div className="footer-section">
            <h3>Teléfono</h3>
            <p>994691528</p>
          </div>
          <div className="footer-section">
            <h3>Escríbenos</h3>
            <p>servicios@tecnoofertas.pe</p>
          </div>
          <div className="footer-section">
            <h3>Productos</h3>
            <ul>
              <li>Ofertas</li>
              <li>Novedades</li>
              <li>Los más vendidos</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Nuestra empresa</h3>
            <ul>
              <li>Términos y Condiciones de uso</li>
              <li>Contacte con nosotros</li>
              <li>Tiendas</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Su cuenta</h3>
            <ul>
              <li>Información personal</li>
              <li>Pedidos</li>
              <li>Facturas por abono</li>
              <li>Direcciones</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
