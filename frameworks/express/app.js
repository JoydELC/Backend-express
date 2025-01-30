const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Importar rutas
const categoryRoutes = require('./routes/categories.routes');
const productRoutes = require('./routes/products.routes');
const userRoutes = require('./routes/users.routes');

// Configuración CORS abierta
app.use(cors({
  origin: '*', // Permite todas las conexiones
  methods: '*', // Permite todos los métodos
  allowedHeaders: '*', // Permite todas las cabeceras
  credentials: true
}));

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api/v1/categories', categoryRoutes);
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/users', userRoutes);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});

module.exports = app;
