'use strict';

const {
  DataTypes
} = require('sequelize');


const {db} = require("./db.connection")

//////////////////////////////

// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');

module.exports = db.define(
  'User',
  {
    // Model attributes are defined here
    id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    // autoIncrement,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
    }
  },{
  timestamp: true,
  updatedAt: true
  }
);