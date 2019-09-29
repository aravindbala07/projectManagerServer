var express = require('express');
var router = express.Router();

const ProjectCntrlr = require("../controllers/project.controller");

router.post("/", ProjectCntrlr.addProject);
router.post("/create", ProjectCntrlr.addProject);
router.post("/update", ProjectCntrlr.updateProject);
router.get("/", ProjectCntrlr.getAllProject);
router.get("/:id", ProjectCntrlr.getProjectById);
router.put("/:id", ProjectCntrlr.addORUpdProject);
router.delete("/:id", ProjectCntrlr.deleteProject);


module.exports = router;
