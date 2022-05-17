//Crea file sincrono
const fs = require("fs");
fs.writeFileSync("./prova1.txt", "Ciao."); //crea file nella stessa cartella
// Il primo parametro è la directory+nomefile, il secondo è il contenuto, il terzo la back-call.
// Di defeault, si sovrascrive. se si vuole aggiungere testo a quello esistente, si disabilita 'fonce' impostandolo a false
var prova = fs.readFileSync("./prova1.txt", {encoding:"utf8"});
console.log(prova);

//la variabile non ha tipo di base, ma assume quello che gli viene assegnato.