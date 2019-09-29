var express = require('express');
var router = express.Router();
const Controller = require("../controllers/parent.controller");

router.post("/", Controller.addTask);
router.post("/create", Controller.addTask);
router.get("/", Controller.getAllParentTasks);
router.get("/:id", Controller.getParentTask);
router.get("/id/:id", Controller.getParentTaskById);
router.put("/:id", Controller.addORUpdParentTask);
router.delete("/:id", Controller.deleteParentTask);

module.exports = router;
