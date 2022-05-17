const modelBooks = require("../models/modelBooks");
const modelAuthors = require("../models/modelAuthors");
const modelWhoWrites = require("../models/modelWhoWrites");
const { redirect } = require("express/lib/response");

module.exports = {
    readAllBooks: function (req,res) {
        modelBooks.readAsync((listBooks)=>{
            res.send(JSON.stringify(listBooks))
        })
    },

    addNewBook: function (req,res) {
        var filterPIVA = req.body.PIVA;
        var controlAuthors = true;

        
        for(let singleAuthor of filterPIVA){
            console.log(singleAuthor);
            modelAuthors.filterAuthor(singleAuthor,(result)=>{
                if(result==null){
                    controlAuthors = false;
                    console.log(singleAuthor + " dentro " + controlAuthors);
                };
            });
        };

        console.log(controlAuthors);

        if (controlAuthors){
            var filterISBN = req.body.ISBN;
            modelBooks.filterBook(filterISBN,(result)=>{
                if(result!=null){
                    res.statusCode = 409;
                    res.send("ISBN già in uso, libro presente nel database.");
                }
                else{

                    var newBook = modelBooks.createBook(
                        req.body.ISBN,
                        req.body.house,
                        req.body.title,
                        req.body.date
                    );

                    listBooks = modelBooks.readbackSync();
                    listBooks.push(newBook);
                        modelBooks.saveJSONBooks(listBooks,function () {
                           console.log("Libro creato.");
                        });

                    var listWhoWrites = modelWhoWrites.readbackSync();
                    for(let singleAuthor of filterPIVA){
                        var newConnection = modelWhoWrites.createWhoWrites(filterISBN,singleAuthor);
                        listWhoWrites.push(newConnection);
                    };
                    console.log(listWhoWrites);
                    modelWhoWrites.saveJSONWhoWrites(listWhoWrites, function () {
                        res.send(listWhoWrites);
                    });
                    
                    
                }
            });
           
        }else{
            res.statusCode = 404;
            res.send("PIVA non trovata, controlla.");
        };
        
    },

    modifiedBook: function name(req,res) {
        var filter = req.params.ISBN;
        
        modelBooks.filterBook(filter,(control)=>{
            if(control==null){
                res.statusCode = 404;
                res.send("Codice ISBN non trovato, libro non nel database.");
            }
            else{
                var modefiedBook = modelBooks.createBook(
                    filter,
                    req.body.house,
                    req.body.title,
                    req.body.date
                );
                modelBooks.readAsync((listBooks)=>
                {
                    let newListBook=[];
                    for(let singleBook of listBooks){
                        if(singleBook.ISBN === filter)
                        newListBook.push(modefiedBook);
                        else
                        newListBook.push(singleBook);
                    }
                    modelBooks.saveJSONBooks(newListBook,function () {
                        res.send(newListBook);
                    });
                });
            }
        });

    },

    sendError404: function () {
        res.statusCode = 404;
        res.send("PIVA non trovata, controlla.");
    },

    //Da riveredEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
    deleteBook: function (req,res) {
        var filter = req.params.ISBN;
        
        modelBooks.filterBook(filter,(control)=>{
            if(control==null){
                res.statusCode = 404;
                res.send("Codice ISBN non trovato, libro non nel database.");
            }
            else{
                
                modelBooks.readAsync((listBooks)=>
                {
                    let newListBook=[];
                    for(let singleBook of listBooks){
                        if(singleBook.ISBN !== filter)
                            newListBook.push(singleBook);
                    }
                    modelBooks.saveJSONBooks(newListBook,function () {
                        //res.send(newListBook);

                        modelWhoWrites.readAsync((listWhoWritesWho), function () {
                            let newListWhoWritesWho=[];
                            for(let singleConn of listWhoWritesWho){
                                if(singleConn.ISBN !== filter)
                                    newListWhoWritesWho.push(singleConn);
                            }
                            modelWhoWrites.saveJSONWhoWrites(newListWhoWritesWho, function () {
                                res.send(newListBook + " " + newListWhoWritesWho);
                            })
                        })
                    });
                });

                

            }
        });
    }
    
}