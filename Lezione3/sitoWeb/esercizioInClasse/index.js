//Esercizio comunicazione con server, legge e mostra a video file JSON

//librerie
const http = require("http"); //libreria http
const studentsLibrary = require("./studenti.js");
//constati per chiamata al server
const PORTA=3000;
const HOST = "localhost";
const fileName = "file1.json";

const server = http.createServer(function (request, response) {
    let body=[];
    //stampa la request
    //console.log(request);
    //stampo della request ciò che potremmo usare
    console.log(request.url);

    if(request.url==="/studenti"){
        request.on('data',(chunk)=>{
            body.push(chunk);
        }).on('end',() =>{
            body = Buffer.concat(body).toString();
            console.log(body);
            studentsLibrary.readAsync(fileName,(studenti)=>{
                response.end(JSON.stringify(studenti));
            })
            //let studenti = JSON.stringify(studentsLibrary.readAsync(fileName));
            
        })
    }
    else{
        request.on('data',(chunk)=>{
            body.push(chunk);
        }).on('end',() =>{
            body = Buffer.concat(body).toString();
            response.statusCode=404;
            response.end();
        })
    }
    
})

//porta in ascolto per ricevere la request ed inviare la response (su crome digita "localhost:3000")
server.listen(PORTA,HOST,function () {
    console.log("Server avviato sulla porta 3000.");
});
