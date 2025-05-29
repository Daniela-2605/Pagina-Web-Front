import React from 'react';
import { Link } from 'react-router-dom';
import './styles/fugas.css'; 
import Logo from "./imagenes/Log.png";
import Detector from "./imagenes/Detector.jpg";
import Camara from "./imagenes/Camarat.jpg";
function DeteccionFugas() {
  return (
    <div>
      {/* Navbar */}
      <header className="navbar">
        <div className="navbar-container container">
          <Link to="../index.html" className="logo">
            <img src={Logo} alt="Logo InstaGas" className="logo-img" />
            <span>InstaGas</span>
          </Link>
          <nav className="nav-links">
            <Link to="../index.html">Inicio</Link>
            <Link to="../index.html#servicios">Servicios</Link>
            <Link to="../index.html#nosotros">Nosotros</Link>
            <Link to="../index.html#contacto">Contacto</Link>
          </nav>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="leak-detection-container container">
        {/* Hero Section */}
        <section className="leak-hero">
          <div className="hero-content">
            <h1>Detección Profesional de Fugas de Gas</h1>
            <p className="hero-subtitle">Tecnología avanzada para identificar y reparar fugas peligrosas</p>
            <div className="emergency-banner">
              <i className="fas fa-exclamation-triangle"></i>
              <span>¿Sospechas de una fuga? <strong>Llámanos inmediatamente: (555) 987-6543</strong></span>
            </div>
          </div>
        </section>

        {/* Señales de alerta */}
        <section className="warning-signs">
          <h2 className="section-title">Señales de una posible fuga</h2>
          <div className="signs-grid">
            <div className="sign-card">
              <div className="sign-icon odor"></div>
              <h3>Olor característico</h3>
              <p>El gas natural contiene mercaptano que huele a huevo podrido</p>
            </div>
            <div className="sign-card">
              <div className="sign-icon sound"></div>
              <h3>Silbido o siseo</h3>
              <p>Sonido inusual cerca de tuberías o aparatos</p>
            </div>
            <div className="sign-card">
              <div className="sign-icon bubbles"></div>
              <h3>Burbujas en agua</h3>
              <p>Al aplicar agua jabonosa en conexiones</p>
            </div>
            <div className="sign-card">
              <div className="sign-icon plants"></div>
              <h3>Plantas muertas</h3>
              <p>Vegetación que se marchita sin razón aparente</p>
            </div>
          </div>
        </section>

        {/* Nuestro proceso */}
        <section className="detection-process">
          <h2 className="section-title">Nuestro Proceso de Detección</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Inspección Visual</h3>
                <p>Búsqueda de señales evidentes de corrosión o daños en tuberías</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Uso de Detectores Electrónicos</h3>
                <p>Equipos de última generación para identificar concentraciones peligrosas</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Prueba de Presión</h3>
                <p>Medición precisa para localizar pérdidas en el sistema</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Informe Detallado</h3>
                <p>Documentación completa con ubicación y severidad de fugas</p>
              </div>
            </div>
          </div>
        </section>

        {/* Equipos de detección */}
        <section className="detection-equipment">
          <h2 className="section-title">Tecnología que Utilizamos</h2>
          <div className="equipment-grid">
            <div className="equipment-card">
              <img src={Detector} alt="Detector electroquímico" />
              <h3>Detectores Electroquímicos</h3>
              <p>Sensibilidad de hasta 1 ppm para detección temprana</p>
            </div>
            <div className="equipment-card">
              <img src={Camara} alt="Cámara térmica" />
              <h3>Cámaras Térmicas</h3>
              <p>Visualización de fugas en tiempo real</p>
            </div>
          </div>
        </section>

        {/* Llamado a la acción */}
        <section className="leak-cta">
          <div className="cta-content">
            <h2>¿Necesitas una inspección de fugas?</h2>
            <p>Nuestros técnicos certificados están disponibles 24/7 para emergencias</p>
            <div className="cta-buttons">
              <a href="tel:5559876543" className="cta-button emergency">
                <i className="fas fa-phone"></i> Llamar ahora
              </a>
              <Link to="../index.html#contacto" className="cta-button secondary">
                <i className="fas fa-calendar-alt"></i> Agendar inspección
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src={Logo} alt="Logo InstaGas" className="logo-img" />
            </div>
            <div className="footer-links">
              <h4>Servicios</h4>
              <Link to="instalacion.html">Instalación</Link>
              <Link to="mantenimiento.html">Mantenimiento</Link>
              <Link to="deteccion-fugas.html">Detección de Fugas</Link>
            </div>
            <div className="footer-contact">
              <h4>Contacto de Emergencia</h4>
              <p><i className="fas fa-phone"></i> (555) 987-6543</p>
              <p><i className="fas fa-clock"></i> Disponible 24/7</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 InstaGas. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a href="https://wa.me/653333?text=Necesito%20ayuda%20con%20una%20fuga%20de%20gas" className="whatsapp-float">
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
}

export default DeteccionFugas;