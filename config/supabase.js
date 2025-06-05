const { createClient } = require('@supabase/supabase-js');
require('dotenv').config(); // Se você estiver usando variáveis de ambiente

// Substitua com a URL e a chave API do seu projeto Supabase
const supabaseUrl = 'https://wkbvhfsrzxtmrqigumeu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrYnZoZnNyenh0bXJxaWd1bWV1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NjcwMjQwMywiZXhwIjoyMDYyMjc4NDAzfQ.sz-8R-DD38VrQw3GsSKj_EPZne-j9C1JSpylRJSh3Ro';
if (!supabaseUrl || !supabaseKey) {
  console.error('Erro: As variáveis de ambiente SUPABASE_URL e SUPABASE_KEY precisam ser definidas.');
  // Você pode querer lançar um erro ou sair do processo aqui
  // throw new Error('Configuração do Supabase incompleta.');
}

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase; 