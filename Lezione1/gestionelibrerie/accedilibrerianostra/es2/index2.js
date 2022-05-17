//accedi a libreria
const writeread = require("./writeread2");

//richiama la funzione
writeread.writeread("prova4.txt","A caso", function(data){
    console.log(data);
});
//fine programma
console.log("Fine programma");