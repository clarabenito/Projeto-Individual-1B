const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Usuário padrão
  const user = await prisma.users.upsert({
    where: { email: 'admin@teste.com' },
    update: {},
    create: {
      id: '9b7dfdea-2375-481d-868c-e2cfca8ef4db',
      nome: 'Admin',
      email: 'admin@teste.com',
    },
  });

  // Salas do mapeamento
  const salas = [
    { id: '11111111-1111-1111-1111-111111111111', nome: 'Sala 1', descricao: 'Sala padrão 1', capacidade: 4 },
    { id: 'a2222222-2222-2222-2222-222222222222', nome: 'Sala 2', descricao: 'Sala padrão 2', capacidade: 6 },
    { id: '33333333-3333-3333-3333-333333333333', nome: 'Sala 3', descricao: 'Sala padrão 3', capacidade: 8 },
    { id: '44444444-4444-4444-4444-444444444444', nome: 'Sala 4', descricao: 'Sala padrão 4', capacidade: 10 },
    { id: '55555555-5555-5555-5555-555555555555', nome: 'Sala 5', descricao: 'Sala padrão 5', capacidade: 12 },
    { id: '66666666-6666-6666-6666-666666666666', nome: 'Sala 6', descricao: 'Sala padrão 6', capacidade: 14 },
  ];

  for (const sala of salas) {
    await prisma.rooms.upsert({
      where: { id: sala.id },
      update: {},
      create: sala,
    });
  }

  console.log('Seed concluído! Usuário e salas criados.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 