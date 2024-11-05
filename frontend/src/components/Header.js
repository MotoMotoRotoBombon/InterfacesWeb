// src/components/Header.js
import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import '../css/Header.css';

const Header = () => {
  const { cart } = useContext(ProductContext);

  return (
    <header className="header">
      <h1>Tienda de Sudaderas</h1>
      <nav className="nav">
        <ul className="nav-list">
          <li>Inicio</li>
          <li>Productos</li>
          <li>Carrito ({cart.length})</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
