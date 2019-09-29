var express = require('express');
var router = express.Router();


const UserCtrl = require("../controllers/user.controller");

router.post("/", UserCtrl.addUser);
router.post("/create", UserCtrl.addUser);
router.get("/", UserCtrl.getAllUsers);
router.get("/:id", UserCtrl.getUserById);
router.put("/:id", UserCtrl.UpdateUser);
router.delete("/:id", UserCtrl.deleteUser);

module.exports = router;
