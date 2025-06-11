const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class Booking {
    static async create(data) {
        return await prisma.bookings.create({
            data: {
                user_id: data.user_id,
                room_id: data.room_id,
                data_inicio: data.data_inicio,
                data_fim: data.data_fim,
                status: data.status || 'confirmada'
            }
        });
    }

    static async findById(id) {
        return await prisma.bookings.findUnique({
            where: { id },
            include: {
                user: true,
                room: true
            }
        });
    }

    static async findAll() {
        return await prisma.bookings.findMany({
            include: {
                user: true,
                room: true
            }
        });
    }

    static async update(id, data) {
        return await prisma.bookings.update({
            where: { id },
            data
        });
    }

    static async delete(id) {
        return await prisma.bookings.delete({
            where: { id }
        });
    }

    static async findByUserId(userId) {
        return await prisma.bookings.findMany({
            where: { user_id: userId },
            include: {
                room: true
            }
        });
    }

    static async findByRoomId(roomId) {
        return await prisma.bookings.findMany({
            where: { room_id: roomId },
            include: {
                user: true
            }
        });
    }

    static async findByRoomIdAndPeriod(roomId, start, end) {
        return await prisma.bookings.findMany({
            where: {
                room_id: roomId,
                data_inicio: { gte: new Date(start) },
                data_fim: { lte: new Date(end) }
            }
        });
    }
}

module.exports = Booking; 