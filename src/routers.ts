import TaskController from "./01-controller/task.controller";
import DailyLogController from "./01-controller/dailyLog.controller";
import UserController from "./01-controller/user.controller";
import CategoriaController from "./01-controller/categoria.controller";

var express = require('express');
var router = express.Router();

const taskController = new TaskController();
const dailyLogController = new DailyLogController();
const userController = new UserController();
const categoriaController = new CategoriaController();

// Teste
router.post('/create', taskController.save);
router.get('/test', dailyLogController.test);

// Daily
router.post('/createDailyLog', dailyLogController.save);
router.post('/updateDailyLog', dailyLogController.save);
router.post('/deleteDailyLog', dailyLogController.remove);
router.post('/getDailyWeek', dailyLogController.getDailyWeek);
router.get('/getMonthlyLog', dailyLogController.getMonthlyLog);
router.get('/getFutureLog', dailyLogController.getFutureLog);

// User
router.post('/createUser', userController.save);
router.post('/updateUser', userController.save);
router.post('/deleteUser', userController.remove);
router.post('/authenticateUser', userController.authenticate);

//Categoria
router.get('/getCategories', categoriaController.getCategories);
router.post('/createCategoria', categoriaController.save);
router.post('/updateCategoria', categoriaController.save);
router.post('/deleteCategoria', categoriaController.remove);

module.exports = router;