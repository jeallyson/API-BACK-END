const Sequelize = require('sequelize');
// Linha 3 no (): Nome do banco, usuário e senha do MySQL (sucessivamente).
const sequelize = new Sequelize('bd-login', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
