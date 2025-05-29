import React from 'react';
import "./styles/mantenimiento.css";
import Logo from "./imagenes/Log.png";

const PaginaMantenimiento = () => {
  const contratarPlan = (plan) => {
    alert(`Has seleccionado el ${plan}. Nos pondremos en contacto para confirmar los detalles.`);
  };

  return (
    <>
      <header className="navbar">
        <div className="navbar-container container">
          <a href="/" className="logo">
            <img src={Logo} alt="Logo InstaGas" className="logo-img" />
            <span>InstaGas</span>
          </a>
          <nav className="nav-links">
            <a href="/">Inicio</a>
            <a href="/#servicios">Servicios</a>
            <a href="/#nosotros">Nosotros</a>
            <a href="/#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      <main className="maintenance-container container">
        <h1>Programas de Mantenimiento Preventivo</h1>
        <p className="subtitle">Maximiza la seguridad y eficiencia de tus instalaciones de gas con nuestros planes especializados</p>

        <div className="maintenance-plans">
          {[
            {
              nombre: 'Plan Básico',
              precio: '$120.000',
              caracteristicas: [
                '2 revisiones anuales',
                'Chequeo de presión',
                'Limpieza básica',
                'Informe técnico'
              ]
            },
            {
              nombre: 'Plan Estándar',
              precio: '$220.000',
              recomendado: true,
              caracteristicas: [
                '4 revisiones anuales',
                'Chequeo completo',
                'Limpieza profunda',
                'Detección de fugas',
                'Informe detallado',
                'Prioridad en emergencias'
              ]
            },
            {
              nombre: 'Plan Premium',
              precio: '$350.000',
              caracteristicas: [
                'Revisiones trimestrales',
                'Mantenimiento completo',
                'Componentes incluidos',
                'Certificado de seguridad',
                'Atención 24/7',
                'Descuento en repuestos'
              ]
            }
          ].map(plan => (
            <div key={plan.nombre} className={`plan-card ${plan.recomendado ? 'recommended' : ''}`}>
              {plan.recomendado && <div className="plan-badge">Recomendado</div>}
              <div className="plan-header">
                <h2>{plan.nombre}</h2>
                <div className="plan-price">{plan.precio}<span>/año</span></div>
              </div>
              <ul className="plan-features">
                {plan.caracteristicas.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
              <button className="cta-button plan-button" onClick={() => contratarPlan(plan.nombre)}>
                Contratar
              </button>
            </div>
          ))}
        </div>

        <div className="maintenance-process">
          <h2>Nuestro Proceso de Mantenimiento</h2>
          <div className="process-steps">
            {[
              { titulo: 'Evaluación Inicial', desc: 'Inspección visual completa del sistema de gas' },
              { titulo: 'Pruebas de Seguridad', desc: 'Verificación de presión y detección de fugas' },
              { titulo: 'Limpieza Profesional', desc: 'Mantenimiento de quemadores y componentes' },
              { titulo: 'Informe Final', desc: 'Documentación completa con recomendaciones' }
            ].map((step, index) => (
              <div key={index} className="step">
                <div className="step-number">{index + 1}</div>
                <h3>{step.titulo}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="maintenance-benefits">
          <h2>Beneficios de Nuestro Mantenimiento</h2>
          <div className="benefits-grid">
            {[
              { titulo: 'Seguridad Garantizada', desc: 'Prevención de accidentes y fugas peligrosas' },
              { titulo: 'Eficiencia Energética', desc: 'Optimización del consumo de gas' },
              { titulo: 'Ahorro Económico', desc: 'Evita reparaciones costosas' },
              { titulo: 'Programación Flexible', desc: 'Nos adaptamos a tus horarios' }
            ].map((benefit, i) => (
              <div key={i} className="benefit">
                <h3>{benefit.titulo}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 InstaGas. Todos los derechos reservados.</p>
        </div>
      </footer>

      <a href="https://wa.me/5551234567" className="whatsapp-float">WhatsApp</a>
    </>
  );
};

export default PaginaMantenimiento;