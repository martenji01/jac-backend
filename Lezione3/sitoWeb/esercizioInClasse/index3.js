//Esercizio comunicazione con server, filtra file JSON per nome

//librerie
const http = require("http"); //libreria http
const studentsLibrary = require("./studenti.js");
const url = require("url");
const dotenv = require("dotenv");

//constati per chiamata al server
const PORTA=3000;
const HOST = "localhost";
const fileName = "file1.json";

const server = http.createServer(function (request, response)
{   //è tutta una callback di createServer
    let body=[];
    //analizza url ed i parametri passati
    let requestURL = url.parse(request.url, true);
    console.log(requestURL.query);
    
        if(requestURL.pathname==="/studenti"){
            request.on('data',(chunk)=>{
                body.push(chunk);
            }).on('end',() =>{
                body = Buffer.concat(body).toString();
                console.log(body);
                //JSON in maniera asincornia
                studentsLibrary.readAsync(fileName, (studentList)=>{
                   //callback della lettura del file JSON in modo asincrono
                    let result=[];
                    for(let student of studentList){
                        if(student.name === requestURL.query.name)
                            result.push(student);
                    }
                    response.end(JSON.stringify(result));
                });
                
            })
        }
        else{
            //manda errore se non è stato trovato nulla
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
