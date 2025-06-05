const supabase = require('../config/database');

class Sala {
    static async listarTodas() {
        try {
            const { data, error } = await supabase
                .from('salas')
                .select('*')
                .order('numero');

            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Erro ao listar salas:', error.message);
            throw error;
        }
    }

    static async buscarPorId(id) {
        try {
            const { data, error } = await supabase
                .from('salas')
                .select('*')
                .eq('id', id)
                .single();

            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Erro ao buscar sala:', error.message);
            throw error;
        }
    }

    static async filtrar({ capacidade, recursos }) {
        try {
            let query = supabase
                .from('salas')
                .select('*');

            if (capacidade) {
                query = query.gte('capacidade', capacidade);
            }

            if (recursos && recursos.length > 0) {
                query = query.contains('recursos', recursos);
            }

            const { data, error } = await query.order('numero');

            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Erro ao filtrar salas:', error.message);
            throw error;
        }
    }
}

module.exports = Sala;