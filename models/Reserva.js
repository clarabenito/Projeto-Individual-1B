const supabase = require('../config/database');

class Reserva {
    static async listarTodas() {
        try {
            const { data, error } = await supabase
                .from('reservas')
                .select(`
                    *,
                    sala:salas (
                        numero,
                        nome
                    )
                `)
                .order('data_inicio', { ascending: false });

            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Erro ao listar reservas:', error.message);
            throw error;
        }
    }

    static async buscarPorId(id) {
        try {
            const { data, error } = await supabase
                .from('reservas')
                .select(`
                    *,
                    sala:salas (
                        numero,
                        nome
                    )
                `)
                .eq('id', id)
                .single();

            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Erro ao buscar reserva:', error.message);
            throw error;
        }
    }

    static async criar(dados) {
        const { sala_id, titulo, descricao, data_inicio, data_fim, participantes } = dados;
        
        try {
            // Verifica se já existe reserva para a sala no horário
            const { data: conflitos, error: conflitosError } = await supabase
                .from('reservas')
                .select('id')
                .eq('sala_id', sala_id)
                .lt('data_inicio', data_fim)
                .gt('data_fim', data_inicio);

            if (conflitosError) throw conflitosError;

            if (conflitos && conflitos.length > 0) {
                throw new Error('Já existe uma reserva para esta sala neste horário');
            }

            const { data, error } = await supabase
                .from('reservas')
                .insert([
                    {
                        sala_id,
                        titulo,
                        descricao,
                        data_inicio,
                        data_fim,
                        participantes
                    }
                ])
                .select()
                .single();

            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Erro ao criar reserva:', error.message);
            throw error;
        }
    }

    static async buscarPorData(data) {
        try {
            const { data: reservas, error } = await supabase
                .from('reservas')
                .select(`
                    *,
                    sala:salas (
                        numero,
                        nome
                    )
                `)
                .gte('data_inicio', data + 'T00:00:00')
                .lt('data_inicio', data + 'T23:59:59')
                .order('data_inicio');

            if (error) throw error;
            return reservas;
        } catch (error) {
            console.error('Erro ao buscar reservas por data:', error.message);
            throw error;
        }
    }

    static async cancelar(id) {
        try {
            const { data, error } = await supabase
                .from('reservas')
                .delete()
                .eq('id', id)
                .select()
                .single();

            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Erro ao cancelar reserva:', error.message);
            throw error;
        }
    }
}

module.exports = Reserva; 