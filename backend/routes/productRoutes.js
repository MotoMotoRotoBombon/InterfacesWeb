// backend/routes/productRoutes.js
const express = require('express');
const { getProducts, createProduct } = require('../controllers/productController');
const router = express.Router();

// Ruta para obtener todos los productos
router.get('/', getProducts);

// Ruta para crear un nuevo producto
router.post('/', createProduct);

module.exports = router;
