const express = require("express");
const auth = require("../middleware/auth.middleware");
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask
} = require("../controllers/task.controller");

const router = express.Router();

router.use(auth);
router.get("/", getTasks);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;