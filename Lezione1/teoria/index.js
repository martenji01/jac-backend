//const fs = require("fs");
// Per accedere ad una libreria,
// la assegno ad una costante usando require(nome libreria tra virgolette).
// N.B. -> Il punto e virgola non è obbligatorio, ma è di buon uso metterlo.

//Accedere ai file
// const fs = require("fs"); --> accedere alla libreria
// fs.readFile(); --> asincrono, necessario se sono operazioni bloccanti, vengono svolti su thread diversi
// fs.readFileSync(); --> sincrono, fatte direttamente sul processo principale

//Crea file sincrono
// const fs = require("fs");
// fs.writeFileSync("./prova.txt", "Ciao."); --> crea file nella stessa cartella
// primo parametro è la directory, il secondo è il contenuto, il terzo la back-call
// var prova = fs.readFileSync("./prova.txt", {encoding:"utf8"}); --> assegno a prova la lettura del file
// console.log(prova);
// la variabile non ha tipo di base, ma assume quello che gli viene assegnato.

//Crea file asincrono
// const fs = require("fs");
// fs.writeFile("./prova2.txt", "Ciao.", function(){console.log("File scritto con successo!")}); --> crea file nella stessa cartella
// Il primo parametro è la directory+nomefile, il secondo è il contenuto, il terzo la back-call.
// Di defeault, si sovrascrive. se si vuole aggiungere testo a quello esistente, si disabilita 'fonce' impostandolo a false

//Crea file asincrono
// const fs = require("fs");
// fs.writeFile("./prova2.txt", "Ciao.", function(err){ if(err) throw err; console.log("File scritto con successo!")});
// console.log("Hello World");
// Viene scritto prima Hello World e poi File scritto con successo,
// poichè la funzione è una call-back

//Se Intellisense non funziona, scarica l'estensione "Moduli Node.js Intellisense"