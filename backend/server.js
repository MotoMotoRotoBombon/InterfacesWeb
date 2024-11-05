// backend/server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

// Configuración de dotenv
dotenv.config();

// Conectar a la base de datos
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/products', productRoutes);

// Inicio del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
