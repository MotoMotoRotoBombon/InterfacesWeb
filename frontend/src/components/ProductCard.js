// src/components/ProductCard.js
import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import '../css/ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(ProductContext);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">${product.price}</p>
      <button className="add-to-cart-button" onClick={() => addToCart(product)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductCard;
