const supabase = require('../config/db'); // Importe o client do Supabase

class User {
  static async create({ nome, email }) {
    const { data, error } = await supabase
      .from('users')
      .insert([{ nome, email }])
      .select()
      .single();

    if (error) throw new Error(error.message);
    return data;
  }

  static async findByEmail(email) {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();

    if (error) return null;
    return data;
  }

  // Adicione outros métodos conforme necessário (getById, update, delete)
}

module.exports = User;
