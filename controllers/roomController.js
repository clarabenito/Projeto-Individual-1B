const Room = require('../models/Room');

const roomController = {
    async create(req, res) {
        try {
            const room = await Room.create(req.body);
            res.status(201).json(room);
        } catch (error) {
            console.error('Erro ao criar sala:', error);
            res.status(500).json({ error: 'Erro ao criar sala' });
        }
    },

    async list(req, res) {
        try {
            const rooms = await Room.findAll();
            res.json(rooms);
        } catch (error) {
            console.error('Erro ao listar salas:', error);
            res.status(500).json({ error: 'Erro ao listar salas' });
        }
    },

    async getById(req, res) {
        try {
            const room = await Room.findById(req.params.id);
            if (!room) return res.status(404).json({ error: 'Sala não encontrada' });
            res.json(room);
        } catch (error) {
            console.error('Erro ao buscar sala:', error);
            res.status(500).json({ error: 'Erro ao buscar sala' });
        }
    },

    async update(req, res) {
        try {
            const room = await Room.update(req.params.id, req.body);
            res.json(room);
        } catch (error) {
            console.error('Erro ao atualizar sala:', error);
            res.status(500).json({ error: 'Erro ao atualizar sala' });
        }
    },

    async delete(req, res) {
        try {
            await Room.delete(req.params.id);
            res.status(204).send();
        } catch (error) {
            console.error('Erro ao deletar sala:', error);
            res.status(500).json({ error: 'Erro ao deletar sala' });
        }
    }
};

module.exports = roomController; 