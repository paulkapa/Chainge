const Sequelize = require('sequelize');
const sequelize = require('..sequelize'); // Import your sequelize configuration

const User = sequelize.define('user', {
  // Define attributes
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  }
  // Add other attributes as needed
});

module.exports = User;