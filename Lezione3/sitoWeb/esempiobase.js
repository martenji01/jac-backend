const http = require("http"); //libreria http

const server = http.createServer(function (request, response) {
    let body=[];
    /*
        Dalla request chiamo una funzione di nome "on",
        concatenata ad un'altra funzione "on".
        La richiesta è asincrona, dobbiamo aspettare l'arrivo di tutti i pezzi,
        per questo motivo passiamo anche delle callback
    */

    /*
        Evento data
        - chunk = blocco di dati ricevuti
        - inserisco chunk nell'array body

        Evento end
        - prendo dati chunk nell'array e li riassemblo, poi lo converto a stringa
        - chiudo la richiesta con la response.end, passando l'array body
    */

    request.on('data',(chunk)=>{
        body.push(chunk);
    }).on('end',() =>{
        body = Buffer.concat(body).toString();
        response.end(body);
    })
    //console.log("Hello World");
    response.end(); //si usa quando si ha terminato le operazioni e si invia la response

})

//porta in ascolto per ricevere la request ed inviare la response
server.listen(3000); // su crome digita "localhost:3000"
