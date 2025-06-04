// app.js
require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const expressLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const authMiddleware = require('./middleware/auth');
const app = express();

// Configurações
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Configuração da sessão
app.use(session({
    secret: 'booknow-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        maxAge: 24 * 60 * 60 * 1000 // 24 horas
    }
}));

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views', 'pages'));
app.set('layout', '../layout/main');
app.use(expressLayouts);

// Arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Rotas principais
app.get('/', (req, res) => {
    res.render('login', {
        title: 'Login - BookNow',
        layout: false
    });
});

// Rotas protegidas
app.use('/salas', authMiddleware);
app.use('/reservas', authMiddleware);
app.use('/calendario', authMiddleware);

app.get('/salas', (req, res) => {
    res.render('salas', {
        title: 'Salas - BookNow'
    });
});

app.get('/reservas', (req, res) => {
    res.render('minhas-reservas', {
        title: 'Minhas Reservas - BookNow'
    });
});

app.get('/calendario', (req, res) => {
    res.render('calendario', {
        title: 'Calendário - BookNow'
    });
});

// Tratamento de erro 404
app.use((req, res) => {
    res.status(404).render('404', {
        title: 'Página não encontrada - BookNow',
        layout: false
    });
});

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Algo deu errado!' });
});

module.exports = app;
