const Project = require('../models/Project');

exports.createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const [updated] = await Project.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json({ message: 'Project updated' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const deleted = await Project.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json({ message: 'Project deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const { Op } = require('sequelize');

exports.getAllProjects = async (req, res) => {
  try {
    const { name, department, status } = req.query;
    const filter = {};

    if (name) {
      filter.name = { [Op.iLike]: `%${name}%` };
    }
    if (department) {
      filter.department = department;
    }
    if (status) {
      filter.status = status;
    }

    const projects = await Project.findAll({ where: filter });
    res.json(projects);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
