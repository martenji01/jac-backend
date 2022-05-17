const { request } = require("express");
const studentsModels = require("../models/modelStudents");

module.exports = {
    getStudentsAll: function (req,res) {

        studentsModels.readAsync((result)=>{
            res.send(JSON.stringify(result));
        });

        /* Con file Sync
        var result = studentsModels.readbackSync();
        console.log(JSON.stringify(result));
        res.send(JSON.stringify(result));
        */
    },

    getStudentsFiltered: function (req,res) {
        var filter = (req.params.username);
        studentsModels.readAsync((studentList)=>{
            let result=[];
            for(let student of studentList){
                console.log(student);
                if(student.username === filter)
                    result.push(student);
            }
            res.send(JSON.stringify(result));
        });
    },

    createStudent: function (req,res) {
        var newStudent = studentsModels.createStudent(
            req.query.name,
            req.query.surname,
            req.query.date,
            req.query.place)
        console.log(newStudent);
        //res.send("Studente creato con successo!");
    },

    //con la GET
    addStudent: function (req,res) {
        
        var newStudent = studentsModels.createStudent(
            req.query.name,
            req.query.surname,
            req.query.date,
            req.query.place)
        console.log(newStudent);

            studentsModels.readAsync((studentList)=>{

                studentList.push(newStudent);
                studentsModels.writebackSync(studentList);
                res.send(JSON.stringify(studentList));
            })

        /*
            studentsLibrary.readAsync(fileName,(studentList)=>{
                studentList.push(newStudent);
                studentsLibrary.writebackSync(fileName,studentList);
                response.end(JSON.stringify(studentList));
            });
        */
    },

    //POST add student
    addNewStudent: function(req,res){
        var newStudent = studentsModels.createStudentBase(
            req.body.name,
            req.body.surname,
            req.body.date,
            req.body.place)
        console.log(newStudent);

        /* salvataggio sync
        studentsModels.readAsync((studentList)=>{
            studentList.push(newStudent);
            studentsModels.writebackSync(studentList);
            res.send(JSON.stringify(studentList));
        })
        */

        studentsModels.readAsync((studentList)=>{
            var controllo = false;
            for(let student of studentList){
                if(student.username===newStudent.username)
                    controllo=true;
            }

            if(controllo){
                res.send("Username utente esiste già");
            }
            else{
                studentList.push(newStudent);
                studentsModels.saveJSONStudents(studentList,function() {
                    res.send(JSON.stringify(studentList));
                });
            }
        })

    },


    //PUT student
    updateStudent: function(req,res) {
        var filter = (req.params.username);
        console.log(filter);

        var updadedStudent = studentsModels.createStudent(
            req.params.username,
            req.body.name,
            req.body.surname,
            req.body.date,
            req.body.place)

        console.log(updadedStudent);
        
        studentsModels.readAsync((studentList)=>{
            let result=[];
            for(let student of studentList){
                console.log(student);
                if(student.username===filter)
                    result.push(updadedStudent);
                else
                    result.push(student);
            }
            studentsModels.saveJSONStudents(result,function() {
                res.send(JSON.stringify(result));
            });
        });
        
    },

    //DELETE student
    deleteStudent: function (req,res) {
        var filter = req.params.username;

        studentsModels.readAsync((studentList)=>{
            let result=[];
            for(let student of studentList){
                console.log(student);
                if(student.username!==filter)
                    result.push(student);
            }
            studentsModels.saveJSONStudents(result,function() {
                res.send(JSON.stringify(result));
            });
        });

    },

    deleteAllStudents: function (req,res) {
        studentsModels.readAsync((studentList)=>{
            studentList =[];
            studentsModels.saveJSONStudents(studentList,function() {
                res.send(JSON.stringify(studentList));
            });
        });
    }
}


