// server.js
const app = require('./app');
const { supabase } = require('./lib/supabase');

const PORT = process.env.PORT || 3000;

// Verifica a conexão com o Supabase
async function checkSupabaseConnection() {
    try {
        const { data, error } = await supabase.from('salas').select('count').single();
        if (error) throw error;
        console.log('Conexão com Supabase estabelecida com sucesso!');
    } catch (error) {
        console.error('Erro ao conectar com Supabase:', error.message);
    }
}

// Inicia o servidor
app.listen(PORT, async () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    await checkSupabaseConnection();
});