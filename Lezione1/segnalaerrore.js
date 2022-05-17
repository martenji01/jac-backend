//Crea file asincrono
const fs = require("fs");
fs.writeFile("./prova2.txt", "Ciao.", function(err){
    if(err) throw err;
    console.log("File scritto con successo!")
});