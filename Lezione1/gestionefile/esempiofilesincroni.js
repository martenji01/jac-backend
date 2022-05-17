//Esempio comportamento file sincroni

//Crea file asincrono
const fs = require("fs");
fs.writeFile("./prova2.txt", "Ciao.", function(err){
    if(err) throw err;
    console.log("File scritto con successo!")
});

var prova = fs.readFileSync("./prova1.txt", {encoding:"utf8"});
console.log("Hello World");

// Viene scritto prima Hello World e poi File scritto con successo,
// poichè la funzione è una call-back