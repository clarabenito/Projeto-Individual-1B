const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', { title: 'Home' });
});

router.get('/login', (req, res) => {
    res.render('login', { title: 'Login' });
});

router.get('/register', (req, res) => {
    res.render('register', { title: 'Registro' });
});

router.get('/alunos', (req, res) => {
    res.render('alunos', { title: 'Alunos' });
});

module.exports = router; 