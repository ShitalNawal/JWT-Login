const dbConfig = require("../config/db.config")

const Sequelize = require("sequelize")

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host:dbConfig.HOST,
    dialect:dbConfig.dialect,
    

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
})

const db = {}
db.User = require("./userModel")(sequelize,Sequelize)
db.Contact = require("./contactModel")(sequelize,Sequelize)

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;