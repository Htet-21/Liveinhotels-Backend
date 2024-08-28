const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Timesheet = sequelize.define('Timesheet', {
  taskName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  hours: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Timesheet;
