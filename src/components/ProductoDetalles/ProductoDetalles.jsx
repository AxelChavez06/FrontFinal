import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCarrito } from "../../components/CarritoContext/CarritoContext"; 
import "./ProductoDetalles.css";

const productos = [
  {
    id: 1,
    nombre: "(Apple) Airpods Max",
    descripcion:
      "El equilibrio perfecto entre un audio de alta fidelidad increíble y la mágica facilidad de uso de los AirPods. Tus próximos audífonos ya están aquí para brindarte una experiencia de audio inigualable. La malla de la diadema, hecha de un material tejido transpirable, distribuye el peso de los audífonos para reducir la presión en la cabeza.",
    imagen: "/public/Imagenes/accesorios1.jpg",
    precio: 2675, 
    stock: "Últimas unidades en stock",
  },
  {
    id: 2,
    nombre: "(Apple) AirPods Pro (2.ª generación)",
    descripcion:
      "Los AirPods Pro (2.ª generación) con Ligthing-C ofrecen hasta 2 veces más Cancelación Activa de Ruido en comparación con la generación anterior y vienen con el modo Ambiente, que te permite escuchar lo que ocurre a tu alrededor, y el nuevo Audio Adaptativo, que personaliza de forma dinámica el control de ruido para adaptarlo a tu entorno. Reconocimiento de Conversación ayuda a bajar el volumen del contenido multimedia y realza las voces delante de ti cuando interactúas con otras personas. Una sola carga brinda hasta 6 horas de batería.7 Y el control táctil te permite ajustar el volumen con sólo deslizar. Además, el estuche de carga MagSafe es impactante por sí mismo, porque cuenta con Rastreo Preciso, bocina integrada.",
    imagen: "/public/Imagenes/accesorios2.jpg",
    precio: 1799, 
    stock: "Últimas unidades en stock",
  },
  {
    id: 3,
    nombre: "(Apple) AirPods 3.ª generación con estuche MagSafe - C-Ligthing",
    descripcion:
      "Los AirPods no pesan nada y ofrecen un ajuste anatómico. Se colocan en el ángulo perfecto para darte un mayor confort y llevar el sonido directamente a tus oídos. Además, son un 33 % más cortos que los AirPods (2.ª generación) e incluyen un sensor de presión que te permite controlar la música y las llamadas fácilmente.",
    imagen: "/public/Imagenes/accesorios3.jpg",
    precio: 799, 
    stock: "Últimas unidades en stock",
  },
  {
    id: 4,
    nombre: "(Apple) Magic Mouse 2da Generación Seminuevo",
    descripcion:
      "Olvídate de las pilas de toda la vida, porque el nuevo ratón Magic Mouse 2 es totalmente recargable. Es más ligero, lleva menos piezas gracias a la batería recargable y a su parte inferior uniforme, y ha ganado en estabilidad, por eso se mueve con mayor suavidad por tu mesa. Y con la superficie Multi-Touch puedes hacer gestos sencillos como pasar de una página web a otra y desplazarte por tus documentos. El ratón Magic Mouse 2 viene listo para usar desde el minuto uno y se conecta a tu Mac de forma ",
    imagen: "/public/Imagenes/accesorios4.jpg",
    precio: 379, 
    stock: "Últimas unidades en stock",
  },
  {
    id: 5,
    nombre: "Magnetic Charging Station (3 EN 1)",
    descripcion:
      "Estación de carga (3 EN 1) te permite cargar hasta tres dispositivos simultáneamente, incluidos un celular, smartwatch, Audífonos con estuche de carga inalámbrica, otros teléfonos Android y auriculares. Diseño PREMIUM con espejo LED Luz nocturna. Funcional para tu tocador o lugares especiales.",
    imagen: "/public/Imagenes/accesorios5.jpg",
    precio: 429, 
    stock: "Últimas unidades en stock",
  },
  {
    id: 6,
    nombre: "(Apple) Magsafe Charger 15w",
    descripcion:
      "El cargador MagSafe está diseñado para cargar tu IPhone con Carga Inalámbrica rapidez y seguridad.",
    imagen: "/public/Imagenes/accesorios6.jpg",
    precio: 229, 
    stock: "Últimas unidades en stock",
  },
  {
    id: 7,
    nombre: "Pack - (Original Apple) Cube Quick Charging 20W + (Original Apple) Magsafe Charger 15w",
    descripcion:
      " 1 (Original Apple) Cube Quick Charging 20W. Ver Producto (Original Apple) Magsafe Charger 15w.  ",
    imagen: "/public/Imagenes/accesorios7.jpg",
    precio: 199, 
    stock: "Últimas unidades en stock",
  },
  {
    id: 8,
    nombre: "(Apple) Cable Type C - Type C - 2 Metros",
    descripcion:
      "Este cable de carga de 1 metros, con conectores TYPE C en ambos extremos, es ideal para cargar, sincronizar y transferir datos entre dispositivos.",
    imagen: "/public/Imagenes/accesorios8.jpg",
    precio: 159, 
    stock: "Últimas unidades en stock",
  },
  {
    id: 9,
    nombre: "(Apple) Earpods Lightning",
    descripcion:
      " Los EarPods con conector Lightning también incluyen un control remoto integrado que te permite ajustar el volumen, controlar la reproducción de música y videos, y responder o finalizar llamadas con sólo tocar el cable.",
    imagen: "/public/Imagenes/accesorios9.jpg",
    precio: 179, 
    stock: "Últimas unidades en stock",
  },
  {
    id: 10,
    nombre: "(Apple) Quick Charging 20W",
    descripcion:
      "1005'Cubo (Adaptador) de Carga con salida 20w Carga Rápida ",
    imagen: "/public/Imagenes/accesorios10.jpg",
    precio: 119, 
    stock: "Últimas unidades en stock",
  },
  {
    id: 11,
    nombre: "(Apple) Cube Charger 5W",
    descripcion:
      "Cubo (Adaptador) de Carga con salida 5W Es el cargador que salió para todos los iPhone desde el primero. Funciona con cable USB ",
    imagen: "/public/Imagenes/accesorios11.jpg",
    precio: 89, 
    stock: "Últimas unidades en stock",
  },
  {
    id: 12,
    nombre: "(Apple) Cable Lightning USB",
    descripcion:
      "Cable Ligthing USB 1 Metro (Original Apple). Alta velocidad que asegura una alta transmisión de datos. Compatible",
    imagen: "/public/Imagenes/accesorios12.jpg",
    precio: 69, 
    stock: "Últimas unidades en stock",
  },
];

const ProductoDetalles = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { agregarProducto } = useCarrito(); 

  const producto = productos.find((p) => p.id === parseInt(id));

  if (!producto) {
    return (
      <div className="producto-detalles">
        <h2>Producto no encontrado</h2>
        <button onClick={() => navigate("/")}>Volver a la tienda</button>
      </div>
    );
  }

  const handleAgregarCarrito = () => {
    agregarProducto(producto); 
    navigate("/carrito");
  };

  return (
    <div className="producto-detalles">
      <div className="detalles-contenedor">
        <div className="producto-imagen">
          <img src={producto.imagen} alt={producto.nombre} />
        </div>
        <div className="producto-info">
          <h1 className="producto-titulo">{producto.nombre}</h1>
          <p className="producto-precio">
            S/ <span>{producto.precio}</span>
          </p>
          <p className="impuestos">Impuestos incluidos</p>
          <p className="producto-descripcion">{producto.descripcion}</p>
          <p className="producto-stock">
            <strong>{producto.stock}</strong>
          </p>
          <div className="cantidad-container">
            <label htmlFor="cantidad">Cantidad:</label>
            <select id="cantidad" name="cantidad">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <button className="boton-compra" onClick={handleAgregarCarrito}>
            Añadir al carrito
          </button>
          <button className="boton-volver" onClick={() => navigate("/")}>
            Volver a la tienda
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductoDetalles;
