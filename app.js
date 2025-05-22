// app.js
require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

// Configurações
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());

// Rotas
const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

const frontendRoutes = require('./routes/frontRoutes');
app.use('/', frontendRoutes);

// Middleware 404
app.use((req, res, next) => {
  res.status(404).send('Página não encontrada');
});

// Middleware erro
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Erro no servidor');
});

module.exports = app;
