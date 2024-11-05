// src/App.js
import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import { ProductProvider } from './context/ProductContext';
import './App.css';

const App = () => {
  return (
    <ProductProvider>
      <Header />
      <Banner />
      <h2 className="section-title">Nuestros Productos</h2>
      <ProductList />
      <Footer />
    </ProductProvider>
  );
};

export default App;
