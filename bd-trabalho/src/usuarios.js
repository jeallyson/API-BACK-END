const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

/** Representação de uma tabela do banco mapeada nessa classe */
/**
 * https://sequelize.org/docs/v6/core-concepts/model-basics/ 
 * 
 * */

const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,

  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
}, {
  sequelize,
  tableName: 'usuario',
  timestamps: false,
});

module.exports = Usuario;
