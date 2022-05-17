//Esercizio comunicazione con server, filtra file JSON per nome, USANDO LE PROMISE

//librerie
const http = require("http"); //libreria http
const studentsLibrary = require("./studenti.js");
const url = require("url");
require("dotenv").config();

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

                    if(requestURL.query.name==null){
                        result=studentList;
                    }
                    else{
                        for(let student of studentList){
                            if(student.name === requestURL.query.name)
                                result.push(student);
                        }
                    }
                    response.end(JSON.stringify(result));
                });
                
        }else if(requestURL.pathname==="/creastudente"){
            var newStudent ={
                name:requestURL.query.name,
                surname:requestURL.query.surname,
                birth:{
                    date:requestURL.query.date,
                    place:requestURL.query.place
                }
            }
            console.log(newStudent);

            studentsLibrary.readAsync(fileName,(studentList)=>{
                studentList.push(newStudent);
                studentsLibrary.writebackSync(fileName,studentList);
                response.end(JSON.stringify(studentList));
            });

        }
        else{


            //manda errore se non è stato trovato nulla
            
                response.statusCode=404;
                response.end();
        }
        
    })

//porta in ascolto per ricevere la request ed inviare la response (su crome digita "localhost:3000")
server.listen(process.env.PORT,process.env.HOST,function () {
    console.log("Server avviato sulla porta 3000.");
});
