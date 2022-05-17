//includi libreria express ed instanzia una costante
const express = require("express");
const app = express();
//includi libreria dotenv
require("dotenv").config();
//controller
const controllers = require("./controllers/controllerStudents");
//router
const studentsRouter = require("./routers/routerStudents");

//Stampa a log ogni richiesta
app.use("/",function(req,res,next){
    console.log(req.method, req.url, req.query, req.body);
    next();
});

//middle-where per interpretare ciò che ottengo dalla richiesta
app.use(express.urlencoded({extended:true}));

//visualizza solo la lista nel JSON
app.get("/allstudents/", controllers.getStudentsAll);

//azioni varie svolte sulla lista studenti
app.use("/studentsAction/",studentsRouter);

//chiamata non gestita o non esistente
app.use("/",function(req,res){
    res.statusCode = 404;
    res.send("Chiamata non gestita o non esistente!");
});

//avvia web server con listen(porta, host, callback)
app.listen(process.env.PORT, process.env.HOST, function () {
    console.log("Server avviato alla porta " + process.env.PORT);
});