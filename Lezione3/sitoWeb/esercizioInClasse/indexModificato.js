//Esercizio comunicazione con server, filtra file JSON per nome (senza la parte di body)

//librerie
const http = require("http"); //libreria http
const studentsLibrary = require("../Lezione3/sitoWeb/esercizioInClasse/studenti.js");
const url = require("url");
//constati per chiamata al server
const PORTA=3000;
const HOST = "localhost";
const fileName = "file1.json";

const server = http.createServer(function (request, response)
{   //è tutta una callback di createServer
    //analizza url ed i parametri passati
    let requestURL = url.parse(request.url, true);
    console.log(requestURL.query);
    
        if(requestURL.pathname==="/studenti"){
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

        }
        else{
            //manda errore se non è stato trovato nulla
            response.statusCode=404;
            response.end();
        }
        
    })

//porta in ascolto per ricevere la request ed inviare la response (su crome digita "localhost:3000")
server.listen(PORTA,HOST,function () {
    console.log("Server avviato sulla porta 3000.");
});
