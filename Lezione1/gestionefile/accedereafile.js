//Accedere ai file
const fs = require("fs"); // accedere alla libreria
fs.readFile(); // asincrono, necessario se sono operazioni bloccanti, vengono svolti su thread diversi
fs.readFileSync(); // sincrono, fatte direttamente sul processo principale
