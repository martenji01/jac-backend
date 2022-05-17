//accedi a libreria
const writeread = require("./writeread");
//richiama la funzione
writeread.writeread("prova4.txt","Marta");
const writeback = require("./writeback");
writeback.writeback("prova4.txt","prova5.txt");
//fine programma
console.log("Fine programma");