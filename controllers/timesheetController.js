const Timesheet = require('../models/Timesheet');

exports.createTimesheet = async (req, res) => {
  try {
    const timesheet = await Timesheet.create(req.body);
    res.status(201).json(timesheet);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getTimesheetById = async (req, res) => {
  try {
    const timesheet = await Timesheet.findByPk(req.params.id);
    if (!timesheet) {
      return res.status(404).json({ error: 'Timesheet not found' });
    }
    res.json(timesheet);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllTimesheets = async (req, res) => {
  try {
    const timesheets = await Timesheet.findAll();
    res.json(timesheets);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateTimesheet = async (req, res) => {
  try {
    const [updated] = await Timesheet.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) {
      return res.status(404).json({ error: 'Timesheet not found' });
    }
    res.json({ message: 'Timesheet updated' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteTimesheet = async (req, res) => {
  try {
    const deleted = await Timesheet.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) {
      return res.status(404).json({ error: 'Timesheet not found' });
    }
    res.json({ message: 'Timesheet deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const { Op } = require('sequelize');

exports.getAllTimesheets = async (req, res) => {
  try {
    const { taskName, date, hours } = req.query;
    const filter = {};

    if (taskName) {
      filter.taskName = { [Op.iLike]: `%${taskName}%` };
    }
    if (date) {
      filter.date = date;
    }
    if (hours) {
      filter.hours = hours;
    }

    const timesheets = await Timesheet.findAll({ where: filter });
    res.json(timesheets);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
