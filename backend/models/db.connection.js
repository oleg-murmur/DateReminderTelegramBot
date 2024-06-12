const Sequelize = require('sequelize');
const {
    DataTypes
  } = require('sequelize');
require('dotenv').config();

const db =  new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: "bot_node_db", // node_db
        port: "5432",
        dialect: "postgres"
    }
)
module.exports = {db}