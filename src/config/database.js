const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'food_delivery',
  username: 'postgres',
  password: 'likkitha',
});

module.exports = sequelize;
