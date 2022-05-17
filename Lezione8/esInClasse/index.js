//Esattamente uguale a "createStudentAsync", ovvero l'ultima cosa fatta

//libreria mongoose
const mongoose = require("mongoose");
const { middlewareFunctions } = require("mongoose/lib/helpers/query/applyQueryMiddleware");

//struttura
const studentStructure = mongoose.Schema({
    idStudent: {type:Number, required:true, unique: true},
    name: {type:String, required: true}, //campo specifico, obbligatorio
    surname: String,
    birth:{
        date: {type: Date},
        place: {type: String}
    }
});

const studentModel = mongoose.model("Student", studentStructure);

async function main() {
    let db = await mongoose.connect("mongodb://127.0.0.1:27017/test");

    var newStudent = new studentModel();
    newStudent.idStudent= 3;
    newStudent.name= "Mario";
    newStudent.surname="Bross";
    newStudent.birth.date= 09/11/2021;
    newStudent.birth.place="DS";
    
    await newStudent.save();
    console.log(newStudent);
};

main().catch((err) => console.log(err));