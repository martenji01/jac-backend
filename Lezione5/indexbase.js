//includi libreria express ed instanzia una costante
const express = require("express");
const app = express();
//includi libreria dotenv
require("dotenv").config();

app.get("/", function (req,res) {
    res.send("Hello World");
});

//get(percorso, funzione(oggetto per richiesta, oggetto per rispondere))
app.get("/", function (req,res) {
    res.send("Hello World");
});

app.get("/studenti/", function (req,res) {
    res.send("Studenti");
});

app.get("/studente/:username", function (req,res) {
    //console.log(req);
    res.send("Studente " + req.params.username);
    console.log(req.params.username);
    
});


//avvia web server con listen(porta, host, callback)
app.listen(process.env.PORT, process.env.HOST, function () {
    console.log("Server avviato alla porta " + process.env.PORT);
});