import TaskController from "./01-controller/task.controller";
import DailyLogController from "./01-controller/dailyLog.controller";

var express = require('express');
var router = express.Router();

const taskController = new TaskController();
const dailyLogController = new DailyLogController();

router.post('/create', taskController.save);
router.post('/createDailyLog', dailyLogController.save);
router.get('/test', dailyLogController.test);

module.exports = router;