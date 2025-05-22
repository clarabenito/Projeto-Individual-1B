const { Pool } = require('pg');
require('dotenv').config();
const fs = require('fs');
const path = require('path');

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  password: process.env.DB_PASSWORD || 'postgres',
  port: process.env.DB_PORT || 5432
});

async function initDB() {
  try {
    // Criar o banco de dados se não existir
    await pool.query(`
      CREATE DATABASE tarefas_db
      WITH 
      OWNER = postgres
      ENCODING = 'UTF8'
      LC_COLLATE = 'en_US.UTF-8'
      LC_CTYPE = 'en_US.UTF-8'
      TABLESPACE = pg_default
      CONNECTION LIMIT = -1;
    `);
    console.log('Banco de dados criado com sucesso!');

    // Conectar ao banco de dados tarefas_db
    const client = new Pool({
      user: process.env.DB_USER || 'postgres',
      host: process.env.DB_HOST || 'localhost',
      database: 'tarefas_db',
      password: process.env.DB_PASSWORD || 'postgres',
      port: process.env.DB_PORT || 5432
    });

    // Ler e executar o arquivo SQL
    const sqlFile = path.join(__dirname, '..', 'init.sql');
    const createTableSQL = fs.readFileSync(sqlFile, 'utf8');
    await client.query(createTableSQL);

    console.log('Tabelas criadas com sucesso!');
    process.exit(0);
  } catch (err) {
    if (err.code === '42P04') {
      console.log('Banco de dados já existe, continuando com a criação das tabelas...');
      const client = new Pool({
        user: process.env.DB_USER || 'postgres',
        host: process.env.DB_HOST || 'localhost',
        database: 'tarefas_db',
        password: process.env.DB_PASSWORD || 'postgres',
        port: process.env.DB_PORT || 5432
      });

      const sqlFile = path.join(__dirname, '..', 'init.sql');
      const createTableSQL = fs.readFileSync(sqlFile, 'utf8');
      await client.query(createTableSQL);
      console.log('Tabelas criadas com sucesso!');
      process.exit(0);
    } else {
      console.error('Erro ao inicializar banco de dados:', err);
      process.exit(1);
    }
  }
}

initDB(); 