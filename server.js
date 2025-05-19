require('dotenv').config();
const express = require('express');
const path = require('path');
const db = require('./config/db'); // Seu Supabase client
const app = express();

// Configuração do EJS e views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para JSON
app.use(express.json());

// Rotas
const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

const frontendRoutes = require('./routes/frontRoutes');
app.use('/', frontendRoutes);

// Middleware para lidar com erros de rota não encontrada
app.use((req, res, next) => {
  res.status(404).send('Página não encontrada');
});

// Middleware para lidar com erros internos do servidor
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Erro no servidor');
});

// Inicialização do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
