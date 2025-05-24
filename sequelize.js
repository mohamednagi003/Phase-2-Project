const { Sequelize } = require('sequelize');

// SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
});

// MySQL (example)
// const sequelize = new Sequelize('your_db', 'username', 'password', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

module.exports = sequelize;
