//Crea file asincrono
const fs = require("fs");

//scrivi file --> parte thread (crea file, scrive, chiude file) e poi fa la back-call
fs.writeFile("./prova2.txt", "Ciao.", function(err){
    if(err) throw err;
    console.log("File scritto con successo!")
});

//leggi file --> parte altro thread(apre file, legge, chiude file)
fs.readFile("./prova2.txt", {encoding:"utf8"}, function(err,data){
    if(err) throw err;
    console.log(data)
});


console.log("Fine programma");

//output --> Fine programma
//           File scritto con successo
//           Ciao.