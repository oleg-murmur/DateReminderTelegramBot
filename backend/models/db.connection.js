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
        host: "localhost", // node_db
        port: "5432",
        dialect: "postgres"
    }
)
// db.define(
//     'User',
//     {
//       // Model attributes are defined here
//       id: {
//       type: DataTypes.UUID,
//       defaultValue: DataTypes.UUIDV4,
//         primaryKey: true,
//         unique: true,
//         allowNull: false,
//       },
//       userId: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       name: {
//         type: DataTypes.STRING,
//       }
//     },{
//     timestamp: true,
//     updatedAt: true
//     }
//   );
// db.define(
//     'Reminder',
//     {
//       // Model attributes are defined here
//       id: {
//         type: DataTypes.UUID,
//         defaultValue: DataTypes.UUIDV4,
//       //   autoIncrement: true,
//         primaryKey: true,
//         unique: true,
//         allowNull: false,
//       },
//       remindeText: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       chatId: {
//         type: DataTypes.STRING,
//       },
//       userId: {
//         type: DataTypes.STRING,
//         allowNull: false,
  
//       },
//       remindeDate: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//     },{
//     timestamp: true,
//     updatedAt: true
//     }
//   );
module.exports = {db}