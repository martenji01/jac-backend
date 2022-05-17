//includi libreria express ed instanzia una costante
const express = require("express");
const app = express();
//includi libreria dotenv
require("dotenv").config();

//controllers
const controllerAuthor = require("./controllers/controllerAuthors");
const controllerBook = require("./controllers/controllerBooks");
//routers
const routerAuthor = require("./routers/routerAuthors");
const routerBook = require("./routers/routerBooks");
const routerLibrary = require("./routers/routerLibrary");

//Stampa a log ogni richiesta
app.use("/",function(req,res,next){
    console.log(req.method, req.url, req.query, req.body);
    next();
});

//middle-where per interpretare ciò che ottengo dalla richiesta
app.use(express.urlencoded({extended:true}));

app.use("/authorsRead/", controllerAuthor.readAllAuthors);
app.use("/booksRead/", controllerBook.readAllBooks);
app.use("/authorsActions/", routerAuthor);
app.use("/booksActions/", routerBook);
app.use("/library/", routerLibrary);

//chiamata non gestita o non esistente
app.use("/",function(req,res){
    res.statusCode = 404;
    res.send("Chiamata non gestita o non esistente!");
});

//avvia web server
app.listen(process.env.PORT, process.env.HOST, function () {
    console.log("Server avviato alla porta " + process.env.PORT);
});