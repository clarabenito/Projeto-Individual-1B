const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const usuario = {
  id: 'd8545160-d1b4-4a31-959f-a5eb41a2091f',
  nome: 'Usuário Teste',
  email: 'teste@teste.com'
};

async function main() {
  const existente = await prisma.users.findUnique({ where: { id: usuario.id } });
  if (!existente) {
    await prisma.users.create({ data: usuario });
    console.log('Usuário de teste criado!');
  } else {
    console.log('Usuário de teste já existe!');
  }
  await prisma.$disconnect();
}

main(); 