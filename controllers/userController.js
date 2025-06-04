const User = require('../models/User');

const userController = {
    async register(req, res) {
        try {
            const user = await User.create(req.body);
            res.status(201).json(user);
        } catch (error) {
            console.error('Erro ao registrar usuário:', error);
            res.status(500).json({ error: 'Erro ao registrar usuário' });
        }
    },

    async login(req, res) {
        try {
            const { email, senha } = req.body;
            const user = await User.findByEmail(email);
            
            if (!user || user.senha !== senha) {
                return res.status(401).json({ error: 'Credenciais inválidas' });
            }

            res.json({ message: 'Login realizado com sucesso' });
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            res.status(500).json({ error: 'Erro ao fazer login' });
        }
    }
};

module.exports = userController; 