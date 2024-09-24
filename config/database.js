const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('salasdeaula', 'postgres', 'postdba', {
  host: 'localhost',     
  dialect: 'postgres',   
  port: 5432,            
  logging: false,       
});

module.exports = sequelize;