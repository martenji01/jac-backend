console.log("Inizio programma");
const fileName = "file1.json";
const studentsLibrary = require("./studenti.js");

var studentsList = [
    {
        name: "Mario",
        surname: "Bross",
        birth: {
            date: "01/01/01",
            place: "DS"
        }
    },
    {
        name: "Luigi",
        surname: "Bross",
        birth: {
            date: "02/02/02",
            place: "DS"
        }
    }
]

console.log("Carico array su file");
try {
    studentsLibrary.writeback(fileName,studentsList);
    console.log("Operazione riuscita.");
} catch (error) {
    console.log("Si è verificato un errore: " + error);
}

console.log("Leggo da file e inserisco in un nuovo array");
var copiedStudentsList=[];
try {
    copiedStudentsList = studentsLibrary.readback(fileName);
    console.log("Operazione riuscita.");
} catch (error) {
    console.log("Si è verificato un errore: " + error);
}

console.log("Aggiungi nuovo elemento a json");
var newObj =
    {
        name: "Daisy",
        surname: "Bross",
        birth: {
            date: "03/03/03",
            place: "DS"
        }
    }
try {
    studentsLibrary.readadd(fileName,newObj);
    console.log("Operazione riuscita.");
} catch (error) {
    console.log("Si è verificato un errore: " + error);
}

/*
console.log("Ordina lista");
try {
    studentsLibrary.readadd(fileName,studentsList);
    console.log("Operazione riuscita.");
} catch (error) {
    console.log("Si è verificato un errore: " + error);
}
*/

