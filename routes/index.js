// routes/index.js
const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const Room = require('../models/Room');

// Rota para listar reservas (histórico)
router.get('/reservas', async (req, res) => {
    try {
        // Busca todas as reservas, incluindo dados da sala
        const reservas = await Booking.findAll();
        res.render('pages/reservas', { reservas });
    } catch (error) {
        res.render('pages/reservas', { reservas: [] });
    }
});

// Rota para cancelar reserva
router.delete('/reservas/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { error } = await supabase
            .from('reservas')
            .delete()
            .eq('id', id);

        if (error) {
            return res.status(500).json({ message: 'Erro ao cancelar reserva' });
        }

        res.status(200).json({ message: 'Reserva cancelada com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cancelar reserva' });
    }
});

module.exports = router;