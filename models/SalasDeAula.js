const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const SalaDeAula = sequelize.define('SalaDeAula', {
  salasdeaulaid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false
  },
  localizacao: {
    type: DataTypes.STRING,
    allowNull: false
  },
  capacidade: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  removido: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  tableName: 'salasdeaula',
  timestamps: false
});

module.exports = SalaDeAula;
