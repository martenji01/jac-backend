//includi libreria express ed instanzia una costante
const express = require("express");
const app = express();
//router
const router = express.Router();
//controller
const controllers = require("../controllers/controllerStudents");

router.get("/studentsfiltered/:username", controllers.getStudentsFiltered);

router.post("/addstudent/", controllers.addNewStudent);

router.put("/updatestudent/:username", controllers.updateStudent);
//router.get("/addstudent/", controllers.addStudent);

router.get("/createstudent/", controllers.createStudent);

router.delete("/deletestudent/:username", controllers.deleteStudent);

router.delete("/deleteallstudents/", controllers.deleteAllStudents);

module.exports = router;