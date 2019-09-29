var express = require('express');
var router = express.Router();

const TaskController = require("../controllers/task.controller");

router.post("/", TaskController.addTask);
router.post("/create", TaskController.addTask);
router.post("/update", TaskController.updateTask);
router.get("/", TaskController.getAllTask);
router.get("/:id", TaskController.getTaskById);
router.put("/:id", TaskController.addORUpdTask);
router.delete("/:id", TaskController.deleteTask);

module.exports = router;
