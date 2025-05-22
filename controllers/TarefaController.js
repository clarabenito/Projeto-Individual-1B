// controllers/TarefaController.js
const pool = require('../config/db');

// Criar uma nova tarefa
exports.criarTarefa = async (req, res) => {
  const { user_id, room_id, data_reserva, data_inicio, data_fim, status } = req.body;

  const query = 'INSERT INTO tarefas (user_id, room_id, data_reserva, data_inicio, data_fim, status) VALUES ($1, $2) RETURNING *';
  const values = [user_id, room_id, data_reserva, data_inicio, data_fim, status];

  try {
    const result = await pool.query(query, values);
    const tarefa = result.rows[0];
    res.status(201).json(tarefa);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Listar todas as tarefas
exports.listarTarefas = async (req, res) => {
  const query = 'SELECT * FROM tarefas';

  try {
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Editar uma tarefa
exports.editarTarefa = async (req, res) => {
  const { id } = req.params;
  const { user_id, room_id, data_reserva, data_inicio, data_fim, status } = req.body;

  const query = `
    UPDATE tarefas SET user_id = $1, room_id = $2, data_reserva = $3, data_inicio = $4, data_fim = $5, status = $6, updated_at = CURRENT_TIMESTAMP
    WHERE id = $7 RETURNING *`;
  const values = [user_id, room_id, data_reserva, data_inicio, data_fim, status, id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Excluir uma tarefa
exports.excluirTarefa = async (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM tarefas WHERE id = $1 RETURNING *';
  const values = [id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    res.status(200).json({ message: 'Tarefa excluída com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};