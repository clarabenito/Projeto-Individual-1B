class User {
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    static async create(data) {
        // Aqui seria a lógica para criar um usuário no banco
        const user = new User(data.nome, data.email, data.senha);
        return user;
    }

    static async findByEmail(email) {
        // Aqui seria a lógica para buscar um usuário pelo email
        return null;
    }

    static async findById(id) {
        // Aqui seria a lógica para buscar um usuário pelo ID
        return null;
    }
}

module.exports = User; 