const express = require("express");
const studentController = require("../Controller/studentcontroller");

const router = express.Router();

router.get("/",studentController.getAllData);
router.get("/:id",studentController.getStudentById);
router.post("/",studentController.addStudent);
router.put("/:id",studentController.updatestudent);
router.delete("/:id",studentController.deleteStudent);

module.exports = router