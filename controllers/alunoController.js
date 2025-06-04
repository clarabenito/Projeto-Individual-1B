const Aluno = require('../models/aluno');

const alunoController = {
    async listarAlunos(req, res) {
        try {
            const alunos = await Aluno.findAll();
            res.json(alunos);
        } catch (error) {
            console.error('Erro ao listar alunos:', error);
            res.status(500).json({ error: 'Erro ao listar alunos' });
        }
    },

    async criarAluno(req, res) {
        try {
            const aluno = await Aluno.create(req.body);
            res.status(201).json(aluno);
        } catch (error) {
            console.error('Erro ao criar aluno:', error);
            res.status(500).json({ error: 'Erro ao criar aluno' });
        }
    }
};

module.exports = alunoController; 