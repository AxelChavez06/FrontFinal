import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage"; 
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AccesoriosApple from "./components/AccesoriosApple/AccesoriosApple";
import Carrito from "./components/Carrito/Carrito";
import ProductoDetalles from "./components/ProductoDetalles/ProductoDetalles";
import { CarritoProvider } from "./components/CarritoContext/CarritoContext";
import "./App.css";

const productos = [
  {
    id: 1,
    nombre: "(Apple) Airpods Max",
    imagen: "/public/Imagenes/accesorios1.jpg",
    descripcion:
      "El equilibrio perfecto entre un audio de alta fidelidad increíble y la mágica facilidad de uso de los AirPods.",
    precio: 2675,
    stock: "Últimas unidades en stock",
  },
  {
    id: 2,
    nombre: "(Apple) AirPods Pro (2.ª generación)",
    imagen: "/public/Imagenes/accesorios2.jpg",
    descripcion:
      "Los AirPods Pro te brindan una experiencia auditiva única gracias a su cancelación activa de ruido.",
    precio: 1799,
    stock: "Disponible",
  },
  {
    id: 3,
    nombre: "(Apple) AirPods 3.ª generación",
    imagen: "/public/Imagenes/accesorios3.jpg",
    descripcion:
      "Diseñados con un ajuste perfecto y sonido envolvente, ideales para cualquier ocasión.",
    precio: 799,
    stock: "Disponible",
  },
  {
    id: 4,
    nombre: "(Apple) Magic Mouse 2da Generación",
    imagen: "/public/Imagenes/accesorios4.jpg",
    descripcion:
      "El Magic Mouse es una herramienta esencial para cualquier usuario de Mac.",
    precio: 379,
    stock: "Disponible",
  },
  {
    id: 5,
    nombre: "(Apple) Magic Keyboard",
    imagen: "/public/Imagenes/accesorios5.jpg",
    descripcion:
      "El Magic Keyboard combina un diseño elegante con una experiencia de escritura inigualable.",
    precio: 599,
    stock: "Disponible",
  },
];

function App() {
  const [searchQuery, setSearchQuery] = useState(""); 

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <CarritoProvider> 
      <Router>
        <Header productos={productos} onSearch={handleSearch} />
        <Routes>
          <Route
            path="/"
            element={<LandingPage productos={productos} searchQuery={searchQuery} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/accesorios" element={<AccesoriosApple />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route
            path="/producto/:id"
            element={<ProductoDetalles productos={productos} />}
          />
        </Routes>
      </Router>
    </CarritoProvider>
  );
}

export default App;
