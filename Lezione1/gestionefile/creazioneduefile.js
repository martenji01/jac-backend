//Crea file asincrono
const fs = require("fs");

// scrivi file --> parte thread (crea file, scrive, chiude file)
fs.writeFile("./prova2.txt", "Ciao.", function(err){
    if(err) throw err;
    console.log("File 1 scritto con successo!")
    
});

// scrivi file --> parte thread (crea file, scrive, chiude file)
fs.writeFile("./prova3.txt", "Ciao.", function(err){
    if(err) throw err;
    console.log("File 2 scritto con successo!")
    
});
console.log("Fine programma");