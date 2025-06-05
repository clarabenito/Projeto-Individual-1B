const Sala = require('../models/Sala');

class SalaController {
    static async listarSalas(req, res) {
        try {
            const salas = await Sala.listarTodas();
            res.json(salas);
        } catch (error) {
            console.error('Erro ao listar salas:', error);
            res.status(500).json({ error: 'Erro ao listar salas' });
        }
    }

    static async buscarSala(req, res) {
        try {
            const sala = await Sala.buscarPorId(req.params.id);
            if (!sala) {
                return res.status(404).json({ error: 'Sala não encontrada' });
            }
            res.json(sala);
        } catch (error) {
            console.error('Erro ao buscar sala:', error);
            res.status(500).json({ error: 'Erro ao buscar sala' });
        }
    }

    static async filtrarSalas(req, res) {
        try {
            const { capacidade, recursos } = req.query;
            const salas = await Sala.filtrar({ capacidade, recursos });
            res.json(salas);
        } catch (error) {
            console.error('Erro ao filtrar salas:', error);
            res.status(500).json({ error: 'Erro ao filtrar salas' });
        }
    }

    // Renderização das views
    static async paginaSalas(req, res) {
        try {
            const salas = await Sala.listarTodas();
            res.render('salas', { salas });
        } catch (error) {
            console.error('Erro ao carregar página de salas:', error);
            res.status(500).render('error', { error: 'Erro ao carregar salas' });
        }
    }
}

module.exports = SalaController;