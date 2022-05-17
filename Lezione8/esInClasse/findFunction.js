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
    
    //7. Funzione di "search element" all'interno del modello --> return all
    studentModel.find(function (err,result) {
        if(err)
        console.log(err);
    console.log(result);
    });

    //7. Funzione di "search element" all'interno del modello --> ricerca tramite ID
    studentModel.findOne({idStudent:1},function (err,result) {
        if(err)
        console.log(err);
    console.log(result);
    });

    //7. Funzione di "search element" all'interno del modello --> ricerca tramite ID e modifica
    studentModel.findOne({idStudent:1},function (err,singleStudent) {
        if(err)
        console.log(err);
        singleStudent.name="Peach";
        singleStudent.save(function (err,result) {
            if(err)
                console.log(err);
            
            console.log(result);
        });
    
    });
});

console.log("Fine programma.");