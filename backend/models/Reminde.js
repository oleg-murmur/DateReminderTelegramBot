'use strict';

const {
  DataTypes
} = require('sequelize');


const {db} = require("./db.connection")
console.log(db)
//////////////////////////////

// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');

module.exports = db.define(
  'Reminder',
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.UUIDV4,
      defaultValue: DataTypes.UUIDV4,
    //   autoIncrement: true,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    remindeText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    chatId: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    remindeDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },{
  timestamp: true,
  updatedAt: true
  }
);