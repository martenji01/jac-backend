
const modelAuthors = require("../models/modelAuthors");

module.exports = {
    //read async auhtors
    readAllAuthors: function (req,res) {
        modelAuthors.readAsync((listAuthors)=>{
            console.log("readAllAuthors");
            res.send(JSON.stringify(listAuthors));
        })
    },

    //search author by PIVA
    filterAuthor: function (req,res) {
        var filter = req.params.PIVA;
        
        modelAuthors.filterAuthor(filter,(result)=>{
            if(result==null){
                res.statusCode = 409;
                res.send("Autore non presente nel database.");
            }else{
                res.send(JSON.stringify(result));
            }
            
        });
    },

    //add new author
    addNewAuthor: function (req, res) {
        var filter = req.body.PIVA;

        modelAuthors.filterAuthor(filter,(result)=>{
            if(result!=null){
                res.statusCode = 409;
                res.send("PIVA già in uso, autore già presente nel database.");
            }else{
                var newAuthor = modelAuthors.createAuthor(
                    filter,
                    req.body.name,
                    req.body.surname,
                    req.body.date,
                    req.body.place
                );
                
                modelAuthors.readAsync((listAuthors)=>{
                    listAuthors.push(newAuthor);
                    modelAuthors.saveJSONAuthors(listAuthors,function() {
                            res.send(JSON.stringify(listAuthors));
                    });
                });
            }
        });
    },

    //modified Author
    modifiedAuthor: function (req,res) {
        var filter = req.params.PIVA;

        modelAuthors.filterAuthor(filter,(result)=>{
            if(result==null){
                res.statusCode = 404;
                res.send("PIVA non trovata, autore non esistente nel database.");
            } else{
                var modifiedAuthor = modelAuthors.createAuthor(
                    filter,
                    req.body.name,
                    req.body.surname,
                    req.body.date,
                    req.body.place
                );

                modelAuthors.readAsync((listAuthors)=>{
                    result = [];
                    for(let singleAuthor of listAuthors){
                        if(singleAuthor.PIVA===filter)
                            result.push(modifiedAuthor);
                        else
                            result.push(singleAuthor);
                    };
                    modelAuthors.saveJSONAuthors(result, function () {
                        res.send(JSON.stringify(result));
                    })
                });
            }
        });

    },

    deleteAuthor: function (req,res) {

        var filter = req.params.PIVA;

        modelAuthors.filterAuthor(filter,(result)=>{
            if(result==null){
                res.statusCode = 404;
                res.send("PIVA non trovata, autore non esistente nel database.");
            }else{
                modelAuthors.readAsync((listAuthors)=>{
                    result = [];
                    for(singleAuthor of listAuthors){
                        if(singleAuthor.PIVA!==filter)
                            result.push(singleAuthor);
                    };
                    modelAuthors.saveJSONAuthors(result, function () {
                        res.send(JSON.stringify(result));
                    })
                });
            }
        });

        
    }
}