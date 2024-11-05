// src/components/Footer.js
import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Tienda de Sudaderas. Todos los derechos reservados.</p>
      <div className="footer-links">
        <a href="/about">Sobre Nosotros</a>
        <a href="/contact">Contacto</a>
        <a href="/privacy">Política de Privacidad</a>
      </div>
    </footer>
  );
};

export default Footer;
