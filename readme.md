**Desenvolvido por [Clara Benito](http://www.linkedin.com/in/clara-benito)**

# Sistema de Reservas de Salas

Este sistema permite reservar salas, bloqueando horários já reservados. O calendário mostra apenas horários realmente disponíveis. O backend utiliza UUID para identificar salas e usuários. O usuário de teste é criado automaticamente ao acessar o sistema.

## Como funciona
- O calendário só bloqueia dias/horários realmente reservados.
- Ao reservar, o horário é bloqueado imediatamente.
- O sistema usa UUID para identificar salas e usuários.
- O usuário de teste é criado automaticamente.

## Instalação e uso
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Configure o banco local (PostgreSQL) e rode as migrações:
   ```bash
   npx prisma migrate dev
   ```
3. Inicie o servidor:
   ```bash
   npm start
   ```
4. Acesse em [http://localhost:3000](http://localhost:3000)

## Endpoints principais
- `POST /api/users` — cria usuário
- `GET /api/rooms` — lista salas (com UUID)
- `POST /api/bookings` — cria reserva
- `GET /api/bookings/sala/:roomId?start=YYYY-MM-DD&end=YYYY-MM-DD` — busca reservas de uma sala

## Observações
- O sistema está pronto para uso local e pode ser adaptado para produção.
- O WAD/documentação técnica está atualizada para refletir o fluxo real do sistema.

## Descrição do Sistema

O BookNow é uma aplicação web para gerenciamento de reservas de salas em ambientes corporativos e educacionais. Usuários podem consultar a disponibilidade, filtrar opções e realizar reservas de forma simples e eficiente, evitando conflitos de horários e otimizando o uso dos espaços.

Além de facilitar o controle de reservas, o sistema contribui para a organização do ambiente, permitindo que administradores e colaboradores acompanhem o uso das salas e a agenda de reservas em tempo real.

## Tecnologias Utilizadas

- Node.js
- Express
- PostgreSQL
- Prisma ORM
- Jest (para testes)

## Estrutura do Projeto

O projeto segue a arquitetura MVC (Model-View-Controller):

```
├── controllers/     # Controladores da aplicação
├── models/         # Modelos do banco de dados
├── views/          # Views da aplicação
├── routes/         # Rotas da API
├── prisma/         # Configuração do Prisma ORM
├── tests/          # Testes automatizados
└── config/         # Configurações da aplicação
```

## Configuração do Banco de Dados

O sistema utiliza PostgreSQL como banco de dados. As tabelas principais são:

1. `users` - Armazena informações dos usuários
   - id (UUID)
   - nome (text)
   - email (text)
   - criado_em (timestamp)

2. `rooms` - Armazena informações das salas
   - id (UUID)
   - nome (text)
   - descricao (text)
   - capacidade (integer)
   - status (text)

3. `bookings` - Armazena as reservas
   - id (UUID)
   - user_id (UUID)
   - room_id (UUID)
   - data_reserva (timestamp)
   - data_inicio (timestamp)
   - data_fim (timestamp)
   - status (text)

## Instalação

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure as variáveis de ambiente:
   ```bash
   cp .env.example .env
   ```
4. Configure a variável `DATABASE_URL` no arquivo `.env`
5. Execute as migrações:
   ```bash
   npx prisma migrate dev
   ```
6. Inicie o servidor:
   ```bash
   npm start
   ```

## API Endpoints

### Usuários
- `POST /api/users` - Criar novo usuário
- `GET /api/users` - Listar todos os usuários
- `GET /api/users/:id` - Buscar usuário por ID
- `PUT /api/users/:id` - Atualizar usuário
- `DELETE /api/users/:id` - Deletar usuário

### Salas
- `POST /api/rooms` - Criar nova sala
- `GET /api/rooms` - Listar todas as salas
- `GET /api/rooms/:id` - Buscar sala por ID
- `PUT /api/rooms/:id` - Atualizar sala
- `DELETE /api/rooms/:id` - Deletar sala

### Reservas
- `POST /api/bookings` - Criar nova reserva
- `GET /api/bookings` - Listar todas as reservas
- `GET /api/bookings/:id` - Buscar reserva por ID
- `PUT /api/bookings/:id` - Atualizar reserva
- `DELETE /api/bookings/:id` - Deletar reserva

## Testes

Para executar os testes:
```bash
npm test
```

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Modelo Relacional do Banco de Dados

A imagem abaixo representa a modelagem relacional utilizada na aplicação BookNow:

![Modelo Relacional](./assets/modelo-banco.png)

## Arquitetura do Projeto (MVC)

Este projeto segue a arquitetura MVC (Model-View-Controller) com Node.js e Express.js, utilizando PostgreSQL como sistema gerenciador de banco de dados e Prisma como ORM.
A separação de responsabilidades entre as camadas facilita a manutenção e a escalabilidade da aplicação:
- Model: armazena o modelo de negócios da aplicação, utilizando Prisma para interação com o banco
- View: parte visual da aplicação (EJS)
- Controller: intermediário entre Model e View
- Services: camada adicional para lógica de negócios complexa
- Routes: gerenciamento de rotas da aplicação

## Requisitos

- Node.js 18+
- PostgreSQL 14+
- NPM ou Yarn

## Instalação

Para acessar a aplicação em produção, visite:
[Acessar aplicação](https://clarabenito.github.io/Projeto-Individual-1B/)

Para desenvolvimento local:

1. **Clone o repositório:**
```bash
git clone https://github.com/clarabenito/Projeto-Individual-1B.git
cd Projeto-Individual-1B
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Configure o ambiente:**
- Copie o arquivo `.env.example` para `.env`
- Configure as variáveis de ambiente necessárias

4. **Inicialize o banco de dados:**
```bash
npm run init-db
```

5. **Execute os testes:**
```bash
npm test
```

6. **Inicie o servidor:**
```bash
npm run dev
```

## Estrutura de Diretórios
```
Projeto-Individual-1B/
├── assets/                # Imagens e recursos estáticos
├── config/               # Configurações do projeto
├── controllers/          # Controladores da aplicação
├── documentos/           # Documentação técnica (WAD)
├── models/              # Modelos de dados
├── prisma/              # Configurações do Prisma ORM
├── public/              # Arquivos públicos (CSS, JS, imagens)
├── routes/              # Rotas da aplicação
├── scripts/             # Scripts utilitários
├── services/            # Camada de serviços
├── tests/               # Testes automatizados
├── views/               # Templates EJS
├── app.js               # Configuração do Express
├── init.sql             # Script inicial do banco
├── jest.config.js       # Configuração dos testes
├── modelo-banco.sql     # Schema do banco de dados
├── package.json         # Dependências do projeto
├── README.md            # Esta documentação
└── server.js            # Ponto de entrada da aplicação
```

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor em modo desenvolvimento
- `npm start`: Inicia o servidor em modo produção
- `npm test`: Executa os testes automatizados
- `npm run init-db`: Inicializa o banco de dados
- `npm run prisma:generate`: Gera os clients do Prisma
- `npm run prisma:migrate`: Executa as migrações do banco

## Guia de Estilos

O sistema utiliza uma identidade visual consistente baseada em tons de roxo e cinza:

**Cores:**
- Roxo Principal: #8D40A4
- Roxo Secundário: #B366C9
- Cinza Escuro: #333333
- Cinza Claro: #F5F5F5
- Branco: #FFFFFF

**Tipografia:**
- Fonte Principal: Roboto
- Fonte Secundária: Open Sans

**Componentes:**
- Botões: Bordas arredondadas, com hover effect
- Cards: Sombra suave, cantos arredondados
- Formulários: Campos com bordas suaves e feedback visual
- Ícones: Material Design Icons

## Documentação

Para mais detalhes sobre o projeto, consulte a documentação completa no arquivo [WAD.md](./documentos/WAD.md).

## Licença

Este projeto está licenciado sob a Licença MIT.
