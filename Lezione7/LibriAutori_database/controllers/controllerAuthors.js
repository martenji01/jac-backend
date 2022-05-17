
const modelAuthors = require("../models/modelAuthors");
const modelWrittenBy = require("../models/modelWrittenBy");

module.exports = {
    //read async auhtors
    readAllAuthors: function (req,res) {
        modelAuthors.readAllauthors((listAuthors)=>{
            res.send(listAuthors);
        })
    },

    //search author by PIVA
    filterAuthor: function (req,res) {
        var filter = req.params.PIVA;
        
        modelAuthors.filterByPIVA(filter,(singleAuthor)=>{
            if(singleAuthor==null){
                res.statusCode = 409;
                res.send("Autore non presente nel database.");
            } else{
                res.send(singleAuthor);
            }
        })
    },

    //add new author
    addNewAuthor: function (req, res) {
        var filter = req.body.PIVA;
        
        modelAuthors.addNewAuthor(filter,
            req.body.name,
            req.body.surname,
            req.body.date,
            req.body.place, (singleAuthor)=>{
                if(singleAuthor==null){
                    res.statusCode = 409;
                    res.send("PIVA già in uso, autore già presente nel database.");
                }else{
                    res.send(singleAuthor);
                }
            });
    },

    //modified Author
    modifiedAuthor: function (req,res) {
        var filter = req.params.PIVA;
        
        modelAuthors.authorModify(
            filter,
            req.body.name,
            req.body.surname,
            req.body.date,
            req.body.place,(result)=>{
                if(result==null){
                    res.statusCode = 404;
                    res.send("PIVA non trovata, autore non esistente nel database.");
                } else{
                    res.send(result);
                }
        });

    },

    //MODIFICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
    deleteAuthor: function (req,res) {

        var filter = req.params.PIVA;
        
        modelAuthors.deleteauthor(filter,(result)=>{
            if(result==null){
                res.statusCode = 404;
                res.send("PIVA non trovata, autore non esistente nel database.");
            } else{
                res.send(result);
            }
            
        });
        
    }
}