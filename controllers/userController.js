const User = require('../models/User');

exports.createUser = async (req, res) => {
  try {
    const { nome, email } = req.body;
    const user = await User.create({ nome, email });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Adicione outros métodos (getUser, updateUser, etc.)
