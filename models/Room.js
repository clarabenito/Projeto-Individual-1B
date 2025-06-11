const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class Room {
    static async create(data) {
        return await prisma.rooms.create({
            data: {
                nome: data.nome,
                descricao: data.descricao,
                capacidade: data.capacidade,
                status: data.status || 'disponivel'
            }
        });
    }

    static async findById(id) {
        return await prisma.rooms.findUnique({
            where: { id }
        });
    }

    static async findAll() {
        return await prisma.rooms.findMany();
    }

    static async update(id, data) {
        return await prisma.rooms.update({
            where: { id },
            data
        });
    }

    static async delete(id) {
        return await prisma.rooms.delete({
            where: { id }
        });
    }

    static async findByStatus(status) {
        return await prisma.rooms.findMany({
            where: { status }
        });
    }
}

module.exports = Room; 