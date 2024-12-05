const mongoose = require('mongoose')

class MongoDb {
  static async connect(dbConn, dbName) {
    try {
      await mongoose.connect(dbConn, { dbName })
      console.log('Conexão com banco realizado com sucesso!')
      return mongoose.connection
    } catch (error) {
      console.error('Erro ao conectar ao banco de dados!')
      throw error
    }
  }
}

module.exports = MongoDb
