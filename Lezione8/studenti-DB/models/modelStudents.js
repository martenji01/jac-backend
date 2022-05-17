//includi libreria dotenv
require("dotenv").config();
//libreria mongoose
const mongoose = require("mongoose");
const { middlewareFunctions } = require("mongoose/lib/helpers/query/applyQueryMiddleware");

//includi costanti connessione
const conn = process.env.CONNECTION_DB;

//struttura student
const studentStructure = mongoose.Schema({
    idStudent: {type:Number, required:true, unique: true},
    name: {type:String, required: true}, //campo specifico, obbligatorio
    surname: String,
    birth:{
        date: {type: String},
        place: {type: String}
    }
});

const studentModel = mongoose.model("Student", studentStructure);


module.exports = {

    addNewStudent: async function (myid, myname, mysurname, mydate, myplace, callback) {
        let db = await mongoose.connect(conn);
        //istanzia nuovo studente

        var student = new studentModel();
        student.idStudent= myid;
        student.name= myname;
        student.surname= mysurname;
        student.birth.date= mydate;
        student.birth.place= myplace;

       // var newStudent = this.createStudentStructure(myid, myname, mysurname, mydate, myplace);
        //salva e stampa nuovo studente
        await student.save();
        callback(student);
    },

    filterById: async function (filter, callback) {
        let db = await mongoose.connect(conn);
        studentModel.findOne({idStudent:filter},function (err,result) {
            if(err)
            console.log(err);
        console.log(result);
        callback(result);
        });
    },

    readAllStudents: async function (callback) {
        let db = await mongoose.connect(conn);
        studentModel.find(function (err,result) {
            if(err)
            console.log(err);
        callback(result);
        });
    },

    createStudentStructure: async function (myid, myname, mysurname, mydate, myplace, callback) {
        let db = await mongoose.connect(conn);
        var student = new studentModel();
        student.idStudent= myid;
        student.name= myname;
        student.surname= mysurname;
        student.birth.date= mydate;
        student.birth.place= myplace;
        callback(student);
    },

    studentModify: async function (student, callback) {
        let db = await mongoose.connect(conn);
        studentModel.findOne({idStudent:student.idStudent},function (err,singleStudent) {
            if(err)
            console.log(err);
            singleStudent.name=student.name;
            singleStudent.surname=student.surname;
            singleStudent.date=student.date;
            singleStudent.place=student.place;
            singleStudent.save(function (err,result) {
                if(err)
                    console.log(err);
                
                callback(result);
            });
        
        });
    },

    deleteStudent: async function (filter, callback) {
        let db = await mongoose.connect(conn);
        studentModel.findOneAndRemove({idStudent:filter},function (err,result) {
            if(err)
            console.log(err);
        callback(result);
        });
    }

}