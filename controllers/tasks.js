const Task = require("../models/Task");

const getAllTasks = (req, res) => {
  res.status(200).send("get all task");
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    console.log(error._message);
  }
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.json(req.body);
};

const deleteTask = (req, res) => {
  res.status(200).send("delete Task");
};
module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
