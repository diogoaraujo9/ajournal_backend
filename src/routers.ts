import TaskController from "./01-controller/task.controller";

var express = require('express');
var router = express.Router();

const taskController = new TaskController();

router.post('/create', taskController.save);

module.exports = router;