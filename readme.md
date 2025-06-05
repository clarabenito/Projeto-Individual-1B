**Desenvolvido por [Clara Benito](http://www.linkedin.com/in/clara-benito)**

# BookNow – Sistema de Reservas Online

Sistema web para gerenciamento de reservas de salas, desenvolvido em Node.js com Express, EJS, Prisma e PostgreSQL, seguindo o padrão MVC.

## Descrição do Sistema

O BookNow é uma aplicação web para gerenciamento de reservas de salas em ambientes corporativos e educacionais. Usuários podem consultar a disponibilidade, filtrar opções e realizar reservas de forma simples e eficiente, evitando conflitos de horários e otimizando o uso dos espaços.

Além de facilitar o controle de reservas, o sistema contribui para a organização do ambiente, permitindo que administradores e colaboradores acompanhem o uso das salas e a agenda de reservas em tempo real.

## Tecnologias Utilizadas

- Node.js
- Express.js
- EJS (Template Engine)
- Prisma (ORM)
- PostgreSQL
- Jest (Testes)
- CSS/Bootstrap

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
