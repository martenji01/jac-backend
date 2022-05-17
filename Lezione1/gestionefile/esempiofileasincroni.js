//Esempio comportamento file asincroni

//Crea file asincrono
const fs = require("fs");
fs.writeFile("./prova2.txt", "Ciao.", function(err){
    if(err) throw err;
    console.log("File scritto con successo!")
});

console.log("Hello World");

// Viene scritto prima Hello World e poi File scritto con successo,
// poichè la funzione è una call-back