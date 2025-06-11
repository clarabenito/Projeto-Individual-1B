const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const salas = [
  {
    id: 'dc05fc76-f216-46f6-aaa9-8234a84c6901',
    nome: 'Sala 1',
    descricao: 'Sala para reuniões pequenas',
    capacidade: 4,
    status: 'disponivel'
  },
  {
    id: '9d6e4308-544d-40fa-8d4c-c6e6ece156a5',
    nome: 'Sala 2',
    descricao: 'Sala para reuniões médias',
    capacidade: 6,
    status: 'disponivel'
  },
  {
    id: '23146897-eecc-4441-adad-60aa3c15a9ef',
    nome: 'Sala 3',
    descricao: 'Sala para reuniões grandes',
    capacidade: 12,
    status: 'disponivel'
  }
];

async function main() {
  for (const sala of salas) {
    const existente = await prisma.rooms.findUnique({ where: { id: sala.id } });
    if (!existente) {
      await prisma.rooms.create({ data: sala });
      console.log(`Sala criada: ${sala.nome}`);
    } else {
      console.log(`Sala já existe: ${sala.nome}`);
    }
  }
  await prisma.$disconnect();
}

main(); 