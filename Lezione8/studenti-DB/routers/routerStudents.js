//includi libreria express
const express = require("express");
//router
const router = express.Router();
//controllers
const controllerStudents = require("../controllers/controllerStudents");

router.get("/readAll/", controllerStudents.studentReadAll);
router.get("/filteredStudents/:idStudent", controllerStudents.studentFiltered);
router.put("/modifyStudentById/:idStudent", controllerStudents.studentModify);
router.post("/addNewStudent/", controllerStudents.studentCreateNew);
router.delete("/deleteStudent/:idStudent", controllerStudents.studentDelete);

module.exports = router;