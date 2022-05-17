//Crea file asincrono
const fs = require("fs");

// scrivi file --> parte thread (crea file, scrive, chiude file)
// poi fa la back-call (conferma la scrittura file, parte la lettura del file)
fs.writeFile("./prova2.txt", "Ciao.", function(err){
    if(err) throw err;
    console.log("File scritto con successo!")
    //leggi file
    fs.readFile("./prova2.txt", {encoding:"utf8"}, function(err,data){
     if(err) throw err;
        console.log(data)
    });
});

console.log("Fine programma");


//output --> Fine programma
//           File scritto con successo
//           Ciao.
// Ha lo stesso output di esercizio.js, ciò che cambia è che parte solo un thread