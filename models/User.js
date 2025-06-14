const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

class User {
    static async create(data) {
        const senhaCriptografada = await bcrypt.hash(data.senha, 10);
        return await prisma.users.create({
            data: {
                nome: data.nome,
                email: data.email,
                senha: senhaCriptografada
            }
        });
    }

    static async findByEmail(email) {
        return await prisma.users.findUnique({
            where: { email }
        });
    }

    static async findById(id) {
        return await prisma.users.findUnique({
            where: { id }
        });
    }

    static async findAll() {
        return await prisma.users.findMany();
    }

    static async update(id, data) {
        return await prisma.users.update({
            where: { id },
            data
        });
    }

    static async delete(id) {
        return await prisma.users.delete({
            where: { id }
        });
    }
}

module.exports = User; 