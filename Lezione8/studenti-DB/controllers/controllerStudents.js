const modelStudents = require("../models/modelStudents");

module.exports={

    studentReadAll: function (req,res) {
        modelStudents.readAllStudents((listStudents)=>{
            res.send(listStudents);
        });
    },

    studentFiltered: function (req,res) {
        var filter = req.params.idStudent;
        modelStudents.filterById(filter, (singleStudent)=>{
            res.send(singleStudent);
        });
    },

    studentCreateNew: function (req,res) {
        var filter = req.body.idStudent;
        modelStudents.filterById(filter, (result)=>{
            if(result!=null){
                res.statusCode = 404;
                res.send("ID studente già esistente.");
            } else{
                modelStudents.addNewStudent(
                    filter,
                    req.body.name,
                    req.body.surname,
                    req.body.date,
                    req.body.place,
                    (newStudent)=>{
                        res.send(newStudent);
                    }
                )
            }
        })

        
    },

    studentModify: function (req,res) {
        var filter = req.params.idStudent;
        modelStudents.filterById(filter, (result)=>{
            if(result==null){
                res.statusCode = 404;
                res.send("ID studente non trovato.");
            } else{
                modelStudents.createStudentStructure(
                    filter,
                    req.body.name,
                    req.body.surname,
                    req.body.date,
                    req.body.place,
                    (modifiedStudent)=>{
                        modelStudents.studentModify(modifiedStudent,(result)=>{
                            res.send(result);
                        });
                    });
                
            }
        })
        
    },

    studentDelete: function (req,res) {
        var filter = req.params.idStudent;
        modelStudents.filterById(filter, (result)=>{
            if(result==null){
                res.statusCode = 404;
                res.send("ID studente non trovato.");
            } else{
                
                modelStudents.deleteStudent(filter,(result)=>{
                    res.send(result);
                });
                
            }
        })
    }
}