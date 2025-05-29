import { useState } from 'react'; 
import { Link } from 'react-router-dom';
import './styles/style.css';
import Logo from "./imagenes/Log.png"

const InstaGas = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
      <a href="/home" className="logo">


<img src={Logo} alt="Logo" className="logo" />

</a>
      
        <div className="navbar-container container">
 
          <nav className="nav-links">
          <a href="#contacto">Contacto</a>
          <a href="#servicios">Servicios</a>
          <a href="#nosotros">Nosotros</a>
            <Link to="/Form">Login</Link>
            <div className="auth-buttons">
              {!isLoggedIn ? (
                <>

                </>
              ) : (
                <div className="user-profile">
                  <span>{username}</span>
                  <button className="logout-btn" onClick={handleLogout}>
                    Cerrar sesión
                  </button>
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="hero">
        <div className="hero-content container">
          <h1>Servicios Profesionales de Gas</h1>
          <p>Soluciones seguras y eficientes para tu hogar o negocio</p>
          <div className="hero-buttons">
            <Link to="#servicios" className="cta-button">Nuestros Servicios</Link>
            <Link to="#contacto" className="cta-button secondary">Contacto Rápido</Link>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="services-section">
        <div className="container">
          <h2 className="section-title">Nuestros Servicios</h2>
          <div className="services-grid">
            {/* Instalación */}
            <div className="service-card">
              <Link to="/pages/instalacion" className="service-link">
                <div className="service-icon">
                  <span role="img" aria-label="Instalación">🔥</span>
                </div>
                <h3>Instalación Profesional</h3>
                <p>Productos y sistemas completos con los más altos estándares de seguridad.</p>

                <Link to="/paginainstalacion">
                  <button>Ver Catálogo</button>
                    </Link>
                    </Link>
            </div>
            
            {/* Mantenimiento */}
            <div className="service-card">
              <Link to="/pages/mantenimiento" className="service-link">
                <div className="service-icon">
                  <span role="img" aria-label="Mantenimiento">🛠️</span>
                </div>
                <h3>Mantenimiento</h3>
                <p>Revisiones periódicas para garantizar el óptimo funcionamiento.</p>
             
                <Link to="/mantenimiento">
  <button>Ver planes</button>
</Link>
              </Link>
            </div>
            
            {/* Detección de Fugas */}
            <div className="service-card">
              <Link to="/pages/deteccion-fugas" className="service-link">
                <div className="service-icon">
                  <span role="img" aria-label="Detección">🔍</span>
                </div>
                <h3>Detección de Fugas</h3>
                <p>Tecnología especializada para localizar y reparar fugas.</p>
                <span className="service-cta"></span>
                <Link to="/fugas">
  <button>Saber más</button>
</Link>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="about-section">
        <div className="container">
          <div className="about-content">
            <h2 className="section-title">Sobre Nosotros</h2>
            <p>InstaGas es una empresa con más de 10 años de experiencia en el sector, comprometida con la seguridad y calidad en todos nuestros servicios. Nuestro equipo de técnicos certificados garantiza instalaciones eficientes y mantenimiento preventivo.</p>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Años de experiencia</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Clientes satisfechos</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Servicio de emergencias</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="contact-section">
        <div className="container">
          <h2 className="section-title">Contáctanos</h2>
          <div className="contact-container">
            <div className="contact-info">
              <p><span className="icon-text">✉️</span> info@instagas.com</p>
              <p><span className="icon-text">📞</span> (555) 123-4567</p>
              <p><span className="icon-text">📍</span> Av. Principal #123, Ciudad</p>
              <div className="social-links">
                <a href="#"><span className="social-icon">Facebook</span></a>
                <a href="#"><span className="social-icon">Instagram</span></a>
                <a href="#"><span className="social-icon">WhatsApp</span></a>
              </div>
            </div>
            <form className="contact-form" id="contactForm">
              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="Teléfono" />
              <textarea placeholder="Tu mensaje" required></textarea>
              <button type="submit" className="cta-button">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
            <img src={Logo} alt="Logo" className="logo" />
              
            </div>
            <div className="footer-contact">
              <h4>Contacto</h4>
              <p><span className="icon-text">🕒</span> Lunes a Viernes: 8am - 6pm</p>
              <p><span className="icon-text">📞</span> Emergencias: (555) 987-6543</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 InstaGas. Todos los derechos reservados.</p>
            <div className="legal-links">
              <Link to="#">Términos de servicio</Link>
              <Link to="#">Política de privacidad</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InstaGas;