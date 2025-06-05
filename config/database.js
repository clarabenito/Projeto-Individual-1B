const { createClient } = require('@supabase/supabase-js');
const fetch = require('node-fetch');
require('dotenv').config();

const supabaseUrl = 'https://wkbvhfsrzxtmrqigumeu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrYnZoZnNyenh0bXJxaWd1bWV1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NjcwMjQwMywiZXhwIjoyMDYyMjc4NDAzfQ.sz-8R-DD38VrQw3GsSKj_EPZne-j9C1JSpylRJSh3Ro';

const options = {
    auth: {
        persistSession: false
    },
    global: {
        fetch: fetch
    }
};

const supabase = createClient(supabaseUrl, supabaseKey, options);

// Teste de conexão
const testConnection = async () => {
    try {
        const { data, error } = await supabase.from('salas').select('count');
        if (error) throw error;
        console.log('Conectado ao Supabase com sucesso!');
    } catch (error) {
        console.error('Erro ao conectar ao Supabase:', error.message);
    }
};

testConnection();

module.exports = supabase;