import React, { useState }
from 'react';
import "./styles/instalacion.css";
import calentador6L from "./imagenes/Calentador6lts.jpg";
import calentador7L  from "./imagenes/Calentador7lts.jpg";
import Kitgas from "./imagenes/Kitgas.jpg";
import Reguladorgas from "./imagenes/Reguladorgas.jpg";
import Logo from "./imagenes/Log.png";
const productos = [
  {
    id: '1',
    nombre: 'Calentador de agua instantáneo 6L',
    descripcion: 'Calentador de agua instantáneo para 1 servicio 6 litros por minuto',
    precio: 599999,
    imagen: calentador6L,

  },
  {
    id: '2',
    nombre: 'Calentador Haceb 7hs',
    descripcion: 'Calentador de paso Haceb 7hs Tiro Natural Blanco',
    precio: 890799,
    imagen: calentador7L,
  },
  {
    id: '3',
    nombre: 'Kit instalación profesional',
    descripcion: 'Kit profesional para instalación de gas',
    precio: 120500,
    imagen: Kitgas,
  },
  {
    id: '4',
    nombre: 'Regulador de presión',
    descripcion: 'Regulador de presión para gas natural',
    precio: 75300,
    imagen: Reguladorgas,
  }
];

const Instalacion = () => {
  const [carrito, setCarrito] = useState([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const [busqueda, setBusqueda] = useState('');

  const agregarAlCarrito = (producto) => {
    setCarrito(prev => {
      const existente = prev.find(item => item.id === producto.id);
      if (existente) {
        return prev.map(item =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      } else {
        return [...prev, { ...producto, cantidad: 1 }];
      }
    });
  };

  const totalArticulos = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  const totalPrecio = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  const prepararPedido = () => {
    if (carrito.length === 0) {
      alert('Tu carrito está vacío. Añade productos antes de preparar el pedido.');
      return;
    }
    alert('Pedido preparado correctamente.\n\nNos pondremos en contacto contigo para confirmar disponibilidad y acordar la instalación profesional.');
    setCarrito([]);
  };

  const productosFiltrados = productos.filter(p =>
    p.descripcion.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      {/* Navbar */}
      <header className="navbar">
        <div className="navbar-container container">
          <a href="../index.html" className="logo">
            <img src={Logo} alt="Logo InstaGas" className="logo-img" />

            <span>InstaGas</span>
          </a>
          <nav className="nav-links">
            <a href="../index.html">Inicio</a>
            <a href="../index.html#servicios">Servicios</a>
            <a href="../index.html#nosotros">Nosotros</a>
            <a href="../index.html#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Bot贸n carrito */}
      <div className="cart-icon" onClick={() => setMostrarCarrito(true)}>
        Carrito <span className="cart-count">{totalArticulos}</span>
      </div>

      {/* Sidebar carrito */}
      <div className={`cart-sidebar ${mostrarCarrito ? 'active' : ''}`}>
        <div className="cart-header">
          <h3>
            Tu pedido ({totalArticulos} artículo{totalArticulos !== 1 ? 's' : ''})
          </h3>
          <button className="close-cart" onClick={() => setMostrarCarrito(false)}>
            &times;
          </button>
        </div>
        <div className="cart-items-container">
          {carrito.length === 0 ? (
            <p className="empty-cart-message">Tu carrito está vacío</p>
          ) : (
            carrito.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={item.imagen} alt={item.nombre} className="cart-item-image" />
                <div className="cart-item-details">
                  <h4>{item.nombre}</h4>
                  <p>{item.cantidad} x ${item.precio.toLocaleString('es-CO')}</p>
                  <p>Subtotal: ${(item.precio * item.cantidad).toLocaleString('es-CO')}</p>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="cart-total">
          Total: ${totalPrecio.toLocaleString('es-CO')}
        </div>
        <button className="checkout-btn" onClick={prepararPedido}>Preparar el pedido</button>
      </div>

      {/* Contenido principal */}
      <main className="container">
        <div className="search-bar">
          Buscador
          <input
            type="text"
            placeholder="Buscar productos de instalación..."
            value={busqueda}
            onChange={e => setBusqueda(e.target.value)}
          />
        </div>

        <h1>Productos para Instalación de Gas</h1>

        <div className="product-grid">
          {productosFiltrados.map(producto => (
            <div className="product-card" key={producto.id}>
              <img src={producto.imagen} alt={producto.nombre} className="product-image" />
              <h3 className="product-title">{producto.descripcion}</h3>
              <div className="product-price">
                {producto.precio > 0
                  ? `$${producto.precio.toLocaleString('es-CO')}`
                  : 'Por acordar'}
              </div>
              <div className="product-actions">
                <button onClick={() => agregarAlCarrito(producto)}>AÑADIR</button>
                <button
                  onClick={() =>
                    alert(
                      `Más información sobre: ${producto.descripcion}\n\nEste es un producto profesional para instalaciones de gas. Contáctenos para especificaciones técnicas detalladas.`
                    )
                  }
                >
                  MÁS INFORMACIÓN
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 InstaGas. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Instalacion;
