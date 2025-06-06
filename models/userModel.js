// models/User.js

const db = require('../config/db'); // Seu Supabase client adaptado

class User {
  static async getAll() {
    try {
      const result = await db.query('SELECT * FROM users');
      return result.rows;
    } catch (error) {
      throw new Error(`Erro ao buscar usuários: ${error.message}`);
    }
  }

  static async getById(id) {
    try {
      const result = await db.query('SELECT * FROM users WHERE id = $1', [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error(`Erro ao buscar usuário: ${error.message}`);
    }
  }

  static async create(data) {
    try {
      const result = await db.query(
        'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
        [data.name, data.email]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Erro ao criar usuário: ${error.message}`);
    }
  }

  static async update(id, data) {
    try {
      const result = await db.query(
        'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
        [data.name, data.email, id]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Erro ao atualizar usuário: ${error.message}`);
    }
  }

  static async delete(id) {
    try {
      const result = await db.query(
        'DELETE FROM users WHERE id = $1 RETURNING *',
        [id]
      );
      return result.rows[0] !== undefined;
    } catch (error) {
      throw new Error(`Erro ao deletar usuário: ${error.message}`);
    }
  }
}

module.exports = User;
