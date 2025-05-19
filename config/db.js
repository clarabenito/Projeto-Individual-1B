// config/db.js
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

// Checagem das variáveis de ambiente
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('SUPABASE_URL e SUPABASE_KEY são obrigatórios! Verifique seu arquivo .env');
}

// Inicializa o cliente Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
