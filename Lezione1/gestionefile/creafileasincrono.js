//Crea file asincrono
const fs = require("fs");
fs.writeFile("./prova2.txt", "Ciao.", function(){
    console.log("File scritto con successo!")
}); //crea file nella stessa cartella
// Il primo parametro è la directory+nomefile, il secondo è il contenuto, il terzo la back-call.
// Di defeault, si sovrascrive. se si vuole aggiungere testo a quello esistente, si disabilita 'fonce' impostandolo a false
