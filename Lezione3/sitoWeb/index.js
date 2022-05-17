const http = require("http"); //libreria http

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
            response.end("studenti");
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

//porta in ascolto per ricevere la request ed inviare la response
server.listen(3000); // su crome digita "localhost:3000"
