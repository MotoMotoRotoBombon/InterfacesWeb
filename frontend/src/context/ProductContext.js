// src/context/ProductContext.js
import React, { createContext, useState } from 'react';

// Crear el contexto
export const ProductContext = createContext();

// Proveedor del contexto
export const ProductProvider = ({ children }) => {
  const [products] = useState([
    { id: 1, name: 'Sudadera Básica', price: 25, image: 'image1.jpg' },
    { id: 2, name: 'Sudadera Oversize', price: 30, image: 'image2.jpg' },
    { id: 3, name: 'Sudadera con Capucha', price: 35, image: 'image3.jpg' },
    // Agrega más productos aquí
  ]);

  const [cart, setCart] = useState([]);

  // Función para agregar al carrito
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <ProductContext.Provider value={{ products, cart, addToCart }}>
      {children}
    </ProductContext.Provider>
  );
};
