var studenti = [
    {
        nome: "Mario",
        congome: "Bross"
    },

    {
        nome: "Luigi",
        congome: "Bross"
    }
]

const fs = require("fs");
//prende l'oggetto e la trasforma in una stringa
fs.writeFileSync("studenti.json", JSON.stringify(studenti));
var studentiCopia = JSON.parse(fs.readFileSync("studenti.json", {encoding: "utf8"}));
console.log(studentiCopia);