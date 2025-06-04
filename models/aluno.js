class Aluno {
    constructor(nome, email, matricula) {
        this.nome = nome;
        this.email = email;
        this.matricula = matricula;
    }

    static async findAll() {
        // Aqui seria a lógica para buscar todos os alunos no banco
        return [];
    }

    static async create(data) {
        // Aqui seria a lógica para criar um aluno no banco
        const aluno = new Aluno(data.nome, data.email, data.matricula);
        return aluno;
    }

    static async findByMatricula(matricula) {
        // Aqui seria a lógica para buscar um aluno pela matrícula
        return null;
    }
}

module.exports = Aluno; 