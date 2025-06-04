// routes/index.js
const express = require('express');
const router = express.Router();
const { supabase } = require('../lib/supabase');

// Rota para listar reservas
router.get('/reservas', async (req, res) => {
    try {
        const { data: reservas, error } = await supabase
            .from('reservas')
            .select(`
                id,
                sala_id,
                data,
                horario,
                numero_pessoas,
                status,
                salas (
                    nome
                )
            `)
            .order('data', { ascending: true });

        if (error) {
            res.render('pages/reservas', { reservas: [] });
            return;
        }

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