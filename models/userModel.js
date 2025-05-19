// models/User.js

const db = require('../config/db'); // Seu Supabase client adaptado

class User {
  static async getAll() {
    const { data, error } = await db
      .from('users')
      .select('*');

    if (error) throw new Error(error.message);
    return data;
  }

  static async getById(id) {
    const { data, error } = await db
      .from('users')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw new Error(error.message);
    return data;
  }

  static async create(data) {
    const { data: newUser, error } = await db
      .from('users')
      .insert([{ name: data.name, email: data.email }])
      .select()
      .single();

    if (error) throw new Error(error.message);
    return newUser;
  }

  static async update(id, data) {
    const { data: updatedUser, error } = await db
      .from('users')
      .update({ name: data.name, email: data.email })
      .eq('id', id)
      .select()
      .single();

    if (error) throw new Error(error.message);
    return updatedUser;
  }

  static async delete(id) {
    const { data, error } = await db
      .from('users')
      .delete()
      .eq('id', id)
      .select()
      .single();

    if (error) throw new Error(error.message);
    // Retorna true se encontrou e deletou, false caso contrário
    return !!data;
  }
}

module.exports = User;
