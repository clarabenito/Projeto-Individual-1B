// controllers/TarefaController.js
const pool = require('../config/db');
const User = require('../models/User');

exports.createUser = async (req, res) => {
  try {
    const { nome, email } = req.body;
    const user = await User.create({ id, nome, email });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Listar todas os users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

