const supabase = require('../config/database');

async function initDB() {
    try {
        // Criar tabela de salas
        const { error: salasError } = await supabase
            .from('salas')
            .insert([
                {
                    numero: '101',
                    nome: 'Sala de Reunião 1',
                    capacidade: 8,
                    recursos: ['projetor', 'quadro'],
                    descricao: 'Sala equipada com projetor e quadro branco'
                },
                {
                    numero: '102',
                    nome: 'Sala de Reunião 2',
                    capacidade: 4,
                    recursos: ['videoconferencia'],
                    descricao: 'Sala para videoconferências'
                },
                {
                    numero: '103',
                    nome: 'Sala de Reunião 3',
                    capacidade: 12,
                    recursos: ['projetor', 'quadro', 'videoconferencia'],
                    descricao: 'Sala grande com recursos completos'
                }
            ]);

        if (salasError) {
            throw salasError;
        }

        console.log('Banco de dados inicializado com sucesso!');
        process.exit(0);
    } catch (error) {
        console.error('Erro ao inicializar banco de dados:', error.message);
        process.exit(1);
    }
}

initDB();