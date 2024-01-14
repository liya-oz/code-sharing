const { DataTypes } = require('sequelize');
const { sequelize } = require('./database');

// Define the Code model
const Code = sequelize.define('Code', {
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  code: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = { Code };