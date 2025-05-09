**Desenvolvido por [Clara Benito](http://www.linkedin.com/in/clara-benito)**

# BookNow – Sistema de Reservas Online

Sistema web para gerenciamento de reservas de salas, desenvolvido em Node.js com Express, EJS e Supabase, seguindo o padrão MVC.

## Descrição do Sistema

O BookNow é uma aplicação web para gerenciamento de reservas de salas em ambientes corporativos e educacionais. Usuários podem consultar a disponibilidade, filtrar opções e realizar reservas de forma simples e eficiente, evitando conflitos de horários e otimizando o uso dos espaços.

Além de facilitar o controle de reservas, o sistema contribui para a organização do ambiente, permitindo que administradores e colaboradores acompanhem o uso das salas e a agenda de reservas em tempo real.

##  Modelo Relacional do Banco de Dados

A imagem abaixo representa a modelagem relacional utilizada na aplicação TickIN:

![Modelo Relacional](./assets/modelo-banco.jpg)


## Arquitetura do Projeto (MVC)

Este projeto segue a arquitetura MVC (Model-View-Controller) com Node.js e Express.js, utilizando Supabase (PostgreSQL) como sistema gerenciador de banco de dados.
A separação de responsabilidades entre as camadas facilita a manutenção e a escalabilidade da aplicação:
- Model: armazena o modelo de negócios da aplicação.
- View: parte visual da aplicação (EJS).
- Controller:  intermediário entre Model e View.

O banco de dados é estruturado com base em um modelo relacional, contemplando entidades como `users`, `rooms`, `bookings`, entre outras.

## Requisitos

- Node.js 
- Supabase (PostgreSQL) 

## Instalação

Caso você queira apenas acessar essa aplicação web basta clicar no link abaixo:

[Acessar aplicação](https://clarabenito.github.io/Projeto-Individual-1B/)

Se precisar clonar o projeto individualmente, você deve:
1. **Clonar o repositório:**

```bash
   git clone https://github.com/clarabenito/Projeto-Individual-1B.git
   cd seu-projeto
```

2. **Instalar as dependências:**
    
```bash
npm install
```
    
3. **Configurar o arquivo `.env`:**
    
Renomeie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente necessárias, como as configurações do banco de dados PostgreSQL.
    

Configuração do Banco de Dados
-----------------------------

1. **Criar banco de dados:**
    
    Crie um banco de dados PostgreSQL com o nome especificado no seu arquivo `.env`.
    
2. **Executar o script SQL de inicialização:**
    
```bash
npm run init-db
```
    
Isso criará as tabelas definidas no schema SQL (`modelo-dados.sql`) conforme o modelo físico do banco de dados da aplicação, incluindo entidades como `usuários`, `eventos`, `inscricoes`, entre outras.

    


Estrutura de Diretórios
-----------------------
```
Projeto-Individual-1B/
├── config/                 # Configurações do projeto (ex: conexão com banco)
│ └── database.js                 # Configuração da conexão com o Supabase
├── controllers/                 # Lógica de controle das requisições
│ └── HomeController.js                 # Controller de exemplo
├── models/                 # Modelos de dados do sistema
│ └── User.js                 # Model de usuário
├── routes/                 # Rotas da aplicação
│ └── index.js                 # Roteador principal
├── views/                 # Views da aplicação (EJS)
│ └── home.ejs                 # Página inicial
├── modelo-banco.sql                # Código SQL do banco de dados
├── modelo-banco.png                # Diagrama relacional do banco de dados
├── README.md                # Documentação do projeto (atualizada na etapa 3)
├── WAD.md                # Documento técnico do projeto (atualizado na etapa 3)
├── server.js                # Arquivo principal que inicializa o servidor
└── package.json                # Gerenciador de dependências do Node.js

```

Licença
-------

Este projeto está licenciado sob a Licença MIT.

Este README.md fornece uma visão geral clara do boilerplate, incluindo instruções de instalação, configuração do banco de dados, funcionalidades principais, scripts disponíveis, estrutura de diretórios, como contribuir e informações de licença. Certifique-se de personalizar as seções com detalhes específicos do seu projeto conforme necessário.