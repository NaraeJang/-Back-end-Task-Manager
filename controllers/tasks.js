const getAllTasks = (req, res) => {
  res.status(200).send("get all task");
};

const createTask = (req, res) => {
  res.json(req.body);
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
