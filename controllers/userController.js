const bcrypt = require('bcrypt');
const User = require('../models/User');

const userController = {
    async register(req, res) {
        try {
            console.log('Tentando criar usuário:', req.body);
            const user = await User.create(req.body);
            res.status(201).json(user);
        } catch (error) {
            console.error('Erro ao registrar usuário:', error);
            console.error('Erro detalhado:', error);
            res.status(500).json({ error: 'Erro ao registrar usuário' });
        }
    },

    async login(req, res) {
        const { email, senha } = req.body;
        try {
            const user = await User.findByEmail(email);
            if (!user) {
                return res.status(400).json({ error: 'Usuário não encontrado' });
            }
            const senhaCorreta = await bcrypt.compare(senha, user.senha);
            if (!senhaCorreta) {
                return res.status(401).json({ error: 'Senha incorreta' });
            }
            res.json({ id: user.id, nome: user.nome, email: user.email });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao autenticar usuário' });
        }
    },

    async list(req, res) {
        try {
            const users = await User.findAll();
            res.json(users);
        } catch (error) {
            console.error('Erro ao listar usuários:', error);
            res.status(500).json({ error: 'Erro ao listar usuários' });
        }
    },

    async getById(req, res) {
        try {
            const user = await User.findById(req.params.id);
            if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });
            res.json(user);
        } catch (error) {
            console.error('Erro ao buscar usuário:', error);
            res.status(500).json({ error: 'Erro ao buscar usuário' });
        }
    },

    async update(req, res) {
        try {
            const user = await User.update(req.params.id, req.body);
            res.json(user);
        } catch (error) {
            console.error('Erro ao atualizar usuário:', error);
            res.status(500).json({ error: 'Erro ao atualizar usuário' });
        }
    },

    async delete(req, res) {
        try {
            await User.delete(req.params.id);
            res.status(204).send();
        } catch (error) {
            console.error('Erro ao deletar usuário:', error);
            res.status(500).json({ error: 'Erro ao deletar usuário' });
        }
    }
};

module.exports = userController; 