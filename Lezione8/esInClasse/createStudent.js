//1. libreria mongoose
const mongoose = require("mongoose");
const { middlewareFunctions } = require("mongoose/lib/helpers/query/applyQueryMiddleware");

//2. Crea schema studente --> definiamo al suo interno "argomento: tipoDato"
const studentStructure = mongoose.Schema({
    idStudent: {type:Number, required:true, unique: true},
    name: {type:String, required: true}, //campo specifico, obbligatorio
    surname: String,
    birth:{
        date: {type: Date},
        place: {type: String}
    }
});

//3. Crea modello --> fornisci ("nome modello", schema)
//In Mongodb crea in automatico una collezione che prende il nome in plurale del modello correlato
const studentModel = mongoose.model("Student", studentStructure);


//4. Connessione
mongoose.connect("mongodb://127.0.0.1:27017/test", function (err) {
    if(err)
        console.log(err);
    
        console.log("Start Connection");
    //5. Crea istanza
    //NB: Non passando parametri, crea l'istanza senza contenuti
    var newStudent = new studentModel();
    newStudent.idStudent= 2;
    newStudent.name= "Yoshi";
    newStudent.surname="Bross";
    newStudent.birth.date= 09/11/2021;
    newStudent.birth.place="DS";
    //6. Salvataggio istanza, ha una callback con parametri standard (err, result)
    newStudent.save(function (err,result) {
        if(err)
            console.log(err);
        console.log(result);
    });
});

console.log("Fine programma.");