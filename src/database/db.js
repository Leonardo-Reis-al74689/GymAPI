const mongoose = require('mongoose');

class Database {
	constructor() {
		this.uri = 'mongodb+srv://admin:<ThvnTDuC1WnZJbDD>@cluster1.vfu5s4s.mongodb.net/';
	}
	async initConnection() {
		try {
			await mongoose.connect(this.uri, {
				useNewUrlParser: true,
			});
			console.log('Conexão com MongoDB Atlas estabelecida com sucesso');
		} catch (error) {
			console.error('Erro de conexão ao MongoDB:', error.message);
		}
	}
	async closeConnection() {
		try {
			await mongoose.connection.close();
			console.log('Conexão com o MongoDB fechada!');
		} catch (error) {
			console.error('Erro ao fechar a conexão com o MongoDB:', error.message);
		}
	}
}

module.exports = Database;