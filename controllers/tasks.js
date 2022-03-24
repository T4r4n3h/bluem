const Task = require("../models/Task.js");

module.exports = {
  index,
  create,
};

async function index(req, res) {
  try {
    let tasks = await Task.find(
      { user: req.user._id } 
    )
      .sort({ createdAt: "desc" })
      .exec();
    // 2. send to frontend
    res.status(200).json(tasks);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function create(req, res) {
  console.log('post just came through')
  try {
    const newTask = await Task.create({
      title: req.body.title,
      date: req.body.date,
      reward: req.body.reward,
      user: req.user._id,
    });
    console.log ('this is task:', newTask)
    // 2. send a response to frontend - newly created task, 
    res.status(200).json("ok");
  } catch (err) {
    res.status(400).json(err);
  }
}