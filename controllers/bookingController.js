const Booking = require('../models/Booking');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const bookingController = {
    async create(req, res) {
        try {
            const { user_id, room_id, data_inicio, data_fim } = req.body;

            // Valida se o usuário existe
            const user = await prisma.users.findUnique({
                where: { id: user_id }
            });

            if (!user) {
                return res.status(400).json({ error: 'Usuário não encontrado' });
            }

            // Valida se a sala existe
            const room = await prisma.rooms.findUnique({
                where: { id: room_id }
            });

            if (!room) {
                return res.status(400).json({ error: 'Sala não encontrada' });
            }

            // Valida se já existe reserva no mesmo horário
            const reservaExistente = await prisma.bookings.findFirst({
                where: {
                    room_id,
                    OR: [
                        {
                            AND: [
                                { data_inicio: { lte: new Date(data_inicio) } },
                                { data_fim: { gt: new Date(data_inicio) } }
                            ]
                        },
                        {
                            AND: [
                                { data_inicio: { lt: new Date(data_fim) } },
                                { data_fim: { gte: new Date(data_fim) } }
                            ]
                        }
                    ]
                }
            });

            if (reservaExistente) {
                return res.status(400).json({ error: 'Já existe uma reserva para este horário' });
            }

            console.log('Tentando criar reserva:', req.body);
            const booking = await Booking.create(req.body);
            res.status(201).json(booking);
        } catch (error) {
            console.error('Erro ao criar reserva:', error);
            if (error.meta) {
                console.error('Detalhes do erro Prisma:', error.meta);
            }
            res.status(500).json({ error: 'Erro ao criar reserva', detalhe: error.message, prisma: error.meta });
        }
    },

    async list(req, res) {
        try {
            const bookings = await Booking.findAll();
            res.json(bookings);
        } catch (error) {
            console.error('Erro ao listar reservas:', error);
            res.status(500).json({ error: 'Erro ao listar reservas' });
        }
    },

    async getById(req, res) {
        try {
            const booking = await Booking.findById(req.params.id);
            if (!booking) return res.status(404).json({ error: 'Reserva não encontrada' });
            res.json(booking);
        } catch (error) {
            console.error('Erro ao buscar reserva:', error);
            res.status(500).json({ error: 'Erro ao buscar reserva' });
        }
    },

    async update(req, res) {
        try {
            const booking = await Booking.update(req.params.id, req.body);
            res.json(booking);
        } catch (error) {
            console.error('Erro ao atualizar reserva:', error);
            res.status(500).json({ error: 'Erro ao atualizar reserva' });
        }
    },

    async delete(req, res) {
        try {
            await Booking.delete(req.params.id);
            res.status(204).send();
        } catch (error) {
            console.error('Erro ao deletar reserva:', error);
            res.status(500).json({ error: 'Erro ao deletar reserva' });
        }
    },

    async getByRoom(req, res) {
        try {
            const { roomId } = req.params;
            const { start, end } = req.query;
            const bookings = await Booking.findByRoomIdAndPeriod(roomId, start, end);
            res.json(bookings);
        } catch (error) {
            console.error('Erro ao buscar reservas da sala:', error);
            res.status(500).json({ error: 'Erro ao buscar reservas da sala' });
        }
    }
};

module.exports = bookingController; 