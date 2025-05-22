// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos
app.use(express.static('public'));

// Rotas da API
app.use('/api', routes);

// Rota principal
app.get('/', (req, res) => {
  res.render('pages/home', {
    pageTitle: 'Sistema de Tarefas'
  });
});

// Tratamento de erros
app.use((err, req, res, next) => {
  console.error('Erro:', err);
  res.status(500).render('pages/error', {
    pageTitle: 'Erro',
    error: err.message || 'Algo deu errado!'
  });
});

// Tratamento para rotas não encontradas
app.use((req, res) => {
  res.status(404).render('pages/404', {
    pageTitle: 'Página não encontrada'
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});