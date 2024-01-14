const { Sequelize } = require('sequelize');

// Connect to the database
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'db',
  dialect: 'postgres',
});

// Test the database connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = { sequelize };