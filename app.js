const express = require('express');
const path = require('path');
const cors = require('cors');
const expressLayouts = require('express-ejs-layouts');
const app = express();

// Configurações
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views', 'pages'));
app.set('layout', '../layout/main');
app.use(expressLayouts);

// Arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Rotas
app.get('/', (req, res) => {
    res.render('login', {
        title: 'Login - BookNow',
        layout: false
    });
});

app.get('/salas', (req, res) => {
    res.render('salas', {
        title: 'Salas - BookNow'
    });
});

app.get('/calendario', (req, res) => {
    res.render('calendario', {
        title: 'Calendário - BookNow'
    });
});

app.get('/detalhes', (req, res) => {
    res.render('detalhes', {
        title: 'Detalhes da Reserva - BookNow'
    });
});

app.get('/sucesso', (req, res) => {
    res.render('sucesso', {
        title: 'Reserva Confirmada - BookNow',
        layout: false
    });
});

// API Routes
app.get('/api/salas', (req, res) => {
    res.json([
        {
            id: 1,
            nome: 'Sala 1',
            capacidade: 4,
            recursos: ['projetor']
        },
        {
            id: 2,
            nome: 'Sala 2',
            capacidade: 6,
            recursos: ['projetor']
        },
        {
            id: 3,
            nome: 'Sala 3',
            capacidade: 4,
            recursos: ['projetor']
        },
        {
            id: 4,
            nome: 'Sala 4',
            capacidade: 8,
            recursos: ['projetor', 'projetor']
        },
        {
            id: 5,
            nome: 'Sala 5',
            capacidade: 6,
            recursos: ['projetor']
        },
        {
            id: 6,
            nome: 'Sala 6',
            capacidade: 4,
            recursos: ['projetor']
        }
    ]);
});

app.get('/api/reservas', (req, res) => {
    res.json([]);
});

app.post('/api/reservas', (req, res) => {
    res.status(201).json({ message: 'Reserva criada com sucesso' });
});

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Algo deu errado!' });
});

module.exports = app;